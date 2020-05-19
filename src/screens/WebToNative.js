import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

function WebToNative(props) {
  const webviewRef = React.useRef(null);
  function onMessage(data) {
    alert(data.nativeEvent.data);
    console.log(data.nativeEvent.data);
    props.navigation.navigate('Home');
  }

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
            html: `<body style="display:flex; justify-content:center;flex-direction:column;align-items:center"><h2>React native webview</h2>
                         <h2>React native webview data transfer between webview to native</h2>
                         <button style="color:green; height:100;width:300;font-size:30px" onclick="myFunction()">Send data to Native</button>
                         <p id="demo"></p>
                      <script>
                           const data = [
                               'Javascript',
                               'React',
                               'React Native',
                               'graphql',
                               'Typescript',
                               'Webpack',
                               'Node js',
                            ];
                          function myFunction() {
                            window.ReactNativeWebView.postMessage(JSON.stringify(data))
                          }
                          var i, len, text;
                          for (i = 0, len = data.length, text = ""; i < len; i++) {
                          text += data[i] + "<br>";
                          }
                         document.getElementById("demo").innerHTML = text;
                    </script>
                 </body>`,
          }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webviewRef}
          onMessage={onMessage}
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
export default WebToNative;
