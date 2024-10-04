// Mapping of states to cities and their specific places to visit
const placesByState = {
    AndhraPradesh: {
        Visakhapatnam: ['Kailasagiri', 'Rama Krishna Beach', 'Araku Valley', 'Borra Caves'],
        Tirupati: ['Sri Venkateswara Temple', 'Sri Kapileswara Swamy Temple', 'Akasaganga Teertham'],
        Vijayawada: ['Kanaka Durga Temple', 'Prakasam Barrage', 'Undavalli Caves'],
        ArakuValley: ['Coffee Plantations', 'Borra Caves', 'Tribal Museum']
    },
    ArunachalPradesh: {
        Tawang: ['Tawang Monastery', 'Sela Pass', 'Nuranang Waterfalls'],
        Ziro: ['Talley Valley', 'Kile Pakho', 'Meghna Cave Temple'],
        Itanagar: ['Ganga Lake', 'Itanagar Wildlife Sanctuary', 'Ita Fort'],
        Bomdila: ['Bomdila Monastery', 'Eaglenest Wildlife Sanctuary', 'Apple Orchards']
    },
    Assam: {
        Guwahati: ['Kamakhya Temple', 'Umananda Island', 'Assam State Museum'],
        Kaziranga: ['Kaziranga National Park', 'Orchid and Biodiversity Park', 'Panbari Reserve Forest'],
        Tezpur: ['Agnigarh Hill', 'Bamuni Hills', 'Mahabhairab Temple'],
        Majuli: ['Satras of Majuli', 'Kamalabari Satra', 'Dakhinpat Satra']
    },
    Bihar: {
        Patna: ['Golghar', 'Patna Museum', 'Takht Sri Patna Sahib'],
        BodhGaya: ['Mahabodhi Temple', 'Great Buddha Statue', 'Bodhi Tree'],
        Nalanda: ['Nalanda University', 'Hiuen Tsang Memorial Hall', 'Nalanda Archaeological Museum'],
        Rajgir: ['Vishwa Shanti Stupa', 'Griddhakuta Peak', 'Hot Springs']
    },
    Chhattisgarh: {
        Raipur: ['Mahant Ghasidas Museum', 'Nandan Van Zoo', 'Purkhauti Muktangan'],
        Jagdalpur: ['Chitrakote Falls', 'Tirathgarh Waterfalls', 'Kanger Valley National Park'],
        Bilaspur: ['Ratanpur Temple', 'Achanakmar Wildlife Sanctuary', 'Kanan Pendari Zoo'],
        ChitrakoteFalls: ['Chitrakote Falls', 'Tirathgarh Waterfalls', 'Kutumsar Caves']
    },
    Goa: {
        Panaji: ['Dona Paula', 'Basilica of Bom Jesus', 'Miramar Beach'],
        BagaBeach: ['Baga Beach', 'Tito’s Lane', 'Brittos Beach Shack'],
        Calangute: ['Calangute Beach', 'St. Alex Church', 'Kerkar Art Complex'],
        OldGoa: ['Se Cathedral', 'Church of St. Francis of Assisi', 'Viceroy’s Arch']
    },
    Gujarat: {
        Ahmedabad: ['Sabarmati Ashram', 'Kankaria Lake', 'Sidi Saiyyed Mosque'],
        GirNationalPark: ['Gir Jungle Trail', 'Devalia Safari Park', 'Kamleshwar Dam'],
        Somnath: ['Somnath Temple', 'Triveni Sangam', 'Bhalka Tirth'],
        RannOfKutch: ['White Desert', 'Kala Dungar', 'Kutch Museum']
    },
    Haryana: {
        Gurgaon: ['Cyber Hub', 'Kingdom of Dreams', 'Sultanpur Bird Sanctuary'],
        Kurukshetra: ['Brahma Sarovar', 'Jyotisar', 'Sheikh Chilli’s Tomb'],
        Panipat: ['Panipat Battle Field', 'Kabuli Bagh Mosque', 'Panipat Museum'],
        Faridabad: ['Surajkund', 'Badkhal Lake', 'ISKCON Faridabad']
    },
    HimachalPradesh: {
        Shimla: ['The Ridge', 'Kufri', 'Mall Road'],
        Manali: ['Rohtang Pass', 'Solang Valley', 'Hidimba Devi Temple'],
        Dharamshala: ['McLeod Ganj', 'Namgyal Monastery', 'Triund Trek'],
        Kullu: ['Raghunath Temple', 'Bijli Mahadev', 'Great Himalayan National Park']
    },
    Karnataka: {
        Bengaluru: ['Lalbagh Botanical Garden', 'Cubbon Park', 'Bangalore Palace'],
        Mysore: ['Mysore Palace', 'Chamundi Hill', 'Brindavan Gardens'],
        Coorg: ['Abbey Falls', 'Raja’s Seat', 'Nagarhole National Park'],
        Hampi: ['Virupaksha Temple', 'Vijaya Vittala Temple', 'Hampi Bazaar']
    },
    Kerala: {
        Munnar: ['Tea Gardens', 'Eravikulam National Park', 'Mattupetty Dam'],
        Alleppey: ['Alleppey Backwaters', 'Marari Beach', 'Vembanad Lake'],
        Kochi: ['Fort Kochi', 'Jew Town', 'Chinese Fishing Nets'],
        Kumarakom: ['Kumarakom Bird Sanctuary', 'Backwaters', 'Aruvikkuzhi Waterfalls']
    },
    Maharashtra: {
        Mumbai: ['Gateway of India', 'Marine Drive', 'Elephanta Caves'],
        Pune: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort'],
        Aurangabad: ['Ellora Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort'],
        Nashik: ['Sula Vineyards', 'Trimbakeshwar Temple', 'Panchavati']
    },
    Rajasthan: {
        Jaipur: ['Hawa Mahal', 'Amber Fort', 'City Palace'],
        Udaipur: ['Lake Pichola', 'City Palace Udaipur', 'Jag Mandir'],
        Jaisalmer: ['Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes'],
        Pushkar: ['Brahma Temple', 'Pushkar Lake', 'Camel Fair']
    },
    TamilNadu: {
        Chennai: ['Marina Beach', 'Fort St. George', 'Kapaleeshwarar Temple'],
        Madurai: ['Meenakshi Temple', 'Thirumalai Nayakkar Mahal', 'Alagar Koyil'],
        Ooty: ['Nilgiri Mountain Railway', 'Ooty Lake', 'Botanical Gardens'],
        Kanyakumari: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Kanyakumari Beach']
    },
    // You can continue adding more cities and their attractions for other states similarly
};

// Populate the places dropdown based on selected state
document.getElementById('stateSelect').addEventListener('change', function() {
    const state = this.value;
    const placesSelect = document.getElementById('placesSelect');
    placesSelect.innerHTML = ''; // Clear previous options

    if (state && placesByState[state]) {
        const cities = Object.keys(placesByState[state]);

        // Add cities and their tourist places
        cities.forEach(city => {
            const optGroup = document.createElement('optgroup');
            optGroup.label = city;

            placesByState[state][city].forEach(place => {
                const option = document.createElement('option');
                option.value = place;
                option.textContent = place;
                optGroup.appendChild(option);
            });

            placesSelect.appendChild(optGroup);
        });
    }
});

// Add selected places to itinerary
function addToItinerary() {
    const placesSelect = document.getElementById('placesSelect');
    const itineraryList = document.getElementById('itineraryList');
    
    const selectedPlaces = Array.from(placesSelect.selectedOptions).map(option => option.value);

    selectedPlaces.forEach(place => {
        const li = document.createElement('li');
        li.textContent = place;
        itineraryList.appendChild(li);
    });

    // Clear selection after adding
    placesSelect.selectedIndex = -1;
}
