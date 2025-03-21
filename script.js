// Класс для управления игрой
class GeoGuessrGame {
    constructor() {
        this.currentLocation = null;
        this.guessMarker = null;
        this.map = null;
        // Массив с вашими местами
        this.locations = [
            {
                name: "Москва, Красная площадь, Россия",
                lat: 55.7535,
                lng: 37.6212,
                image: "images/moscow-red-square.jpg" // Путь к вашей картинке
            },
            {
                name: "Санкт-Петербург, Дворцовая площадь, Россия",
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
            {
                name: "Париж, Эйфелева башня, Франция",
                lat: 48.8584,
                lng: 2.2945,
                image: "images/paris-eiffel-tower.jpg"
            },
            {
                name: "Лондон, Тауэрский мост, Великобритания",
                lat: 51.5055,
                lng: -0.0754,
                image: "images/london-tower-bridge.jpg"
            },
            {
                name: "Рим, Колизей, Италия",
                lat: 41.8902,
                lng: 12.4922,
                image: "images/rome-colosseum.jpg"
            },
            {
                name: "Нью-Йорк, Центральный парк, США",
                lat: 40.7580,
                lng: -73.9855,
                image: "images/central-park.jpg"
            },
            {
                name: "Рио-де-Жанейро, Статуя Христа-Искупителя, Бразилия",
                lat: -22.9519,
                lng: -43.2105,
                image: "images/rio-christ-redeemer.jpg"
            },
            {
                name: "Каир, Пирамиды Гизы, Египет",
                lat: 29.9792,
                lng: 31.1342,
                image: "images/cairo-giza-pyramids.jpg"
            },
            {
                name: "Сидней, Оперный театр, Австралия",
                lat: -33.8568,
                lng: 151.2153,
                image: "images/sydney-opera-house.jpg"
            },
            {
                name: "Пекин, Великая Китайская стена, Китай",
                lat: 40.4319,
                lng: 116.5704,
                image: "images/beijing-great-wall.jpg"
            },
            {
                name: "Токио, Синдзюку, Япония",
                lat: 35.6895,
                lng: 139.6917,
                image: "images/tokyo-shinjuku.jpg"
            },
            {
                name: "Барселона, Саграда Фамилия, Испания",
                lat: 41.4036,
                lng: 2.1744,
                image: "images/barcelona-sagrada-familia.jpg"
            },
            {
                name: "Дубай, Бурдж-Халифа, ОАЭ",
                lat: 25.1972,
                lng: 55.2744,
                image: "images/dubai-burj-khalifa.jpg"
            },
            {
                name: "Стамбул, Собор Святой Софии, Турция",
                lat: 41.0086,
                lng: 28.9802,
                image: "images/istanbul-hagia-sophia.jpg"
            },
            {
                name: "Мехико, Теотиуакан, Мексика",
                lat: 19.6925,
                lng: -98.8434,
                image: "images/mexico-teotihuacan.jpg"
            },
            {
                name: "Агра, Тадж-Махал, Индия",
                lat: 27.1751,
                lng: 78.0421,
                image: "images/agra-taj-mahal.jpg"
            },
            {
                "name": "Афины, Парфенон, Греция",
                "lat": 37.9715,
                "lng": 23.7267,
                "image": "images/athens-parthenon.jpg"
            },
            {
                "name": "Вашингтон, Белый дом, США",
                "lat": 38.8977,
                "lng": -77.0365,
                "image": "images/washington-white-house.jpg"
            },
            {
                "name": "Берлин, Бранденбургские ворота, Германия",
                "lat": 52.5163,
                "lng": 13.3777,
                "image": "images/berlin-brandenburg-gate.jpg"
            },
            {
                "name": "Мадрид, Пласа-Майор, Испания",
                "lat": 40.4155,
                "lng": -3.7074,
                "image": "images/madrid-plaza-mayor.jpg"
            },
            {
                "name": "Лиссабон, Башня Белен, Португалия",
                "lat": 38.6916,
                "lng": -9.2159,
                "image": "images/lisbon-belem-tower.jpg"
            },
            {
                "name": "Стокгольм, Королевский дворец, Швеция",
                "lat": 59.3262,
                "lng": 18.0712,
                "image": "images/stockholm-royal-palace.jpg"
            },
            {
                "name": "Осло, Опера, Норвегия",
                "lat": 59.9075,
                "lng": 10.7522,
                "image": "images/oslo-opera-house.jpg"
            },
            {
                "name": "Прага, Карлов мост, Чехия",
                "lat": 50.0865,
                "lng": 14.4114,
                "image": "images/prague-charles-bridge.jpg"
            },
            {
                "name": "Вена, Шёнбрунн, Австрия",
                "lat": 48.1842,
                "lng": 16.3122,
                 "image": "images/vienna-schonbrunn.jpg"
            },
            {
                "name": "Будапешт, Парламент, Венгрия",
                "lat": 47.5067,
                "lng": 19.0450,
                 "image": "images/budapest-parliament.jpg"
            },
            {
                "name": "Брюссель, Гран-Плас, Бельгия",
                "lat": 50.8467,
                "lng": 4.3499,
                 "image": "images/brussels-grand-place.jpg"
            },
            {
                "name": "Копенгаген, Русалочка, Дания",
                "lat": 55.6929,
                "lng": 12.5993,
                 "image": "images/copenhagen-little-mermaid.jpg"
            },
            {
                "name": "Эдинбург, Замок, Шотландия",
                "lat": 55.9486,
                "lng": -3.2008,
                 "image": "images/edinburgh-castle.jpg"
            },
            {
                "name": "Флоренция, Собор Санта-Мария-дель-Фьоре, Италия",
                "lat": 43.7731,
                "lng": 11.2559,
                 "image": "images/florence-duomo.jpg"
            },
            {
                "name": "Милан, Миланский собор, Италия",
                "lat": 45.4642,
                "lng": 9.1900,
                 "image": "images/milan-duomo.jpg"
            },
            {
                "name": "Неаполь, Везувий, Италия",
                "lat": 40.8224,
                "lng": 14.4289,
                 "image": "images/naples-vesuvius.jpg"
            },
            {
                "name": "Варшава, Старый город, Польша",
                "lat": 52.2500,
                "lng": 21.0122,
                 "image": "images/warsaw-old-town.jpg"
            },
            {
                "name": "Краков, Вавельский замок, Польша",
                "lat": 50.0530,
                "lng": 19.9354,
                 "image": "images/krakow-wawel-castle.jpg"
            }
        ];
        this.setupGame();
    }
    
    // Настройка игры
    setupGame() {
        // Инициализация карты
        this.map = L.map('map').setView([0, 0], 2);
        
        // Добавление слоя карты
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
//            attribution: '© OpenStreetMap contributors'
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