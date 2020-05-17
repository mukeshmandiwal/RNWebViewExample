import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

function NativeToWeb(props) {
  const webviewRef = React.useRef(null);
  const data = [
    'Javascript',
    'React',
    'React Naitve',
    'graphql',
    'Typescript',
    'Webpack',
    'Node js',
  ];
  React.useEffect(() => {
    const timer = setTimeout(
      () => webviewRef.current.postMessage(JSON.stringify(data)),
      1000,
    );
    return () => clearTimeout(timer);
  }, []);
  function LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{
            html: `<body><h2>JavaScript For Loop</h2>
            <p id="demo"></p>
            <script>
             var cars = [];
             document.addEventListener("message", function(data) {
                 cars.push(data.data)
                 alert(data.data)
                 var i, len, text;
                 for (i = 0, len = cars.length, text = ""; i < len; i++) {
                 text += cars[i] + "<br>";
                 }
                document.getElementById("demo").innerHTML = text;
                });
           </script>
           </body>`,
          }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webviewRef}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  flexContainer: {
    flex: 1,
  },
});
export default NativeToWeb;
