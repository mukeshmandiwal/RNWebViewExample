import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Home(props) {
  const [titles, setTitle] = React.useState({
    links: [
      {title: 'WebViewUI'},
      {title: 'NativeToWeb'},
      {title: 'WebToNative'},
    ],
  });

  function handleButtonPress(route) {
    props.navigation.navigate(route);
  }
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {titles.links.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(item.title)}
            style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
