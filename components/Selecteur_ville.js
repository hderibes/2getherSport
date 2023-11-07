import React, { useState } from 'react';
import { View, Text, TextInput, Picker, FlatList } from 'react-native';
import villes from './Villes';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [filteredCities, setFilteredCities] = useState(villes);

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleFilterCities = (text) => {
    const filtered = villes.filter((city) =>
      city.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  return (
    <View>
        
      <TextInput
        placeholder="Recherchez une ville..."
        onChangeText={handleFilterCities}
      />
      <Picker
        selectedValue={selectedCity}
        onValueChange={(itemValue, itemIndex) => handleCityChange(itemValue)}
      >
        {filteredCities.map((city) => (
          <Picker.Item key={city} label={city} value={city} />
        ))}
      </Picker>
      <Text>Ville sélectionnée : {selectedCity}</Text>
    </View>
  );
};

export default CitySelector;
