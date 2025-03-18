// Класс для управления игрой
class GeoGuessrGame {
    constructor() {
        this.currentLocation = null;
        this.guessMarker = null;
        this.map = null;
        // Массив с вашими местами
        this.locations = [
            {
                name: "Москва, Красная площадь",
                lat: 55.7535,
                lng: 37.6212,
                image: "images/moscow-red-square.jpg" // Путь к вашей картинке
            },
            {
                name: "Санкт-Петербург, Дворцовая площадь",
                lat: 59.9390,
                lng: 30.3155,
                image: "images/spb-palace-square.jpg"
            },
            {
                name: "Ватикан, Площадь Святого Петра",
                lat: 41.9022,
                lng: 12.4534,
                image: "images/vatican-st-peters-square.jpg"
            },
        ];
        this.setupGame();
    }
    
    // Настройка игры
    setupGame() {
        // Инициализация карты
        this.map = L.map('map').setView([0, 0], 2);
        
        // Добавление слоя карты
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(this.map);
        
        // Обработчики событий
        this.map.on('click', (e) => this.handleMapClick(e));
        this.setupEventListeners();
        
        // Начало игры
        this.startNewRound();
    }
    
    // Генерация случайной локации из вашего списка
    generateRandomLocation() {
        const randomIndex = Math.floor(Math.random() * this.locations.length);
        return this.locations[randomIndex];
    }
    
    // Получение названия места по координатам
    async getLocationName(lat, lng) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
            const data = await response.json();
            return data.display_name || 'Неизвестное место';
        } catch (error) {
            console.error('Ошибка при получении названия места:', error);
            return 'Неизвестное место';
        }
    }
    
    // Начало нового раунда
    async startNewRound() {
        // Показываем загрузку
        document.getElementById('loading').classList.add('active');
        
        // Скрываем модальное окно
        document.getElementById('resultModal').style.display = 'none';
        
        // Генерируем новую локацию из вашего списка
        this.currentLocation = this.generateRandomLocation();
        
        // Загружаем панораму
        const panorama = document.getElementById('panorama');
        panorama.src = this.currentLocation.image;
        
        // Скрываем предыдущий маркер
        if (this.guessMarker) {
            this.map.removeLayer(this.guessMarker);
        }
        
        // Скрываем загрузку после загрузки изображения
        panorama.onload = () => {
            document.getElementById('loading').classList.remove('active');
        };
    }
    
    // Обработка клика по карте
    handleMapClick(e) {
        if (this.guessMarker) {
            this.map.removeLayer(this.guessMarker);
        }
        
        this.guessMarker = L.marker(e.latlng).addTo(this.map);
    }
    
    // Расчет расстояния между точками
    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Радиус Земли в км
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const a = 
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) * 
            Math.sin(dLon/2) * Math.sin(dLon/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return R * c * 1000; // Расстояние в метрах
    }
    
    toRad(value) {
        return value * Math.PI / 180;
    }
    
    // Расчет очков
    calculatePoints(distance) {
        // Максимум 5000 очков, минимум 0
        return Math.max(0, 5000 - Math.floor(distance / 1000));
    }
    
    // Показ результата
    async showResult() {
        if (!this.guessMarker) {
            alert('Пожалуйста, выберите место на карте');
            return;
        }
        
        const guessLatLng = this.guessMarker.getLatLng();
        const distance = this.calculateDistance(
            this.currentLocation.lat,
            this.currentLocation.lng,
            guessLatLng.lat,
            guessLatLng.lng
        );
        
        const points = this.calculatePoints(distance);
        
        // Получаем название выбранного места
        const guessLocation = await this.getLocationName(guessLatLng.lat, guessLatLng.lng);
        
        // Обновляем модальное окно
        document.getElementById('guessLocation').textContent = guessLocation;
        document.getElementById('correctLocation').textContent = this.currentLocation.name;
        document.getElementById('distance').textContent = `${Math.round(distance/1000)} км`;
        document.getElementById('points').textContent = points;
        
        // Показываем модальное окно
        document.getElementById('resultModal').style.display = 'block';
    }
    
    // Настройка обработчиков событий
    setupEventListeners() {
        document.getElementById('confirmButton').addEventListener('click', () => {
            this.showResult();
        });
        
        document.getElementById('nextRound').addEventListener('click', () => {
            this.startNewRound();
        });
    }
}

// Запуск игры при загрузке страницы
window.addEventListener('load', () => {
    new GeoGuessrGame();
}); 