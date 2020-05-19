import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

function NativeToWeb(props) {
  const webviewRef = React.useRef(null);
  const data = [
    'Javascript',
    'React',
    'React Native',
    'graphql',
    'Typescript',
    'Webpack',
    'Node js',
  ];
  const runFirst = `
      document.body.style.backgroundColor = 'green';
      setTimeout(function() { window.alert(JSON.stringify([
             'Javascript',
             'React',
             'React Naitve',
             'graphql',
             'Typescript',
             'Webpack',
             'Node js',
          ])) }, 1000);
      true; // note: this is required, or you'll sometimes get silent failures
    `;

  function onMessage(data) {
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
            html: `<body style="display:flex;justify-content:center;flex-direction:column;align-items:center">
                      <h2>React native webview</h2>
                      <h2>React native webview data transfer between Native to web</h2>
                      <button style="color:green; height:100;width:300;font-size:30px"
                        onclick="myFunction()">Close webview</button>
                      <p id="demo"></p>
                      <script>
                       var newData = [];
                       document.addEventListener("message", function(data) {
                       newData.push(data.data)
                       alert(data.data)
                       var i, len, text;
                       for (i = 0, len = newData.length, text = ""; i < len; i++) {
                       text += newData[i] + "<br>";
                       }
                       document.getElementById("demo").innerHTML = text;
                      });
                      function myFunction() {
                      window.ReactNativeWebView.postMessage('Hello')
                      }
                    </script>
           </body>`,
          }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webviewRef}
          onMessage={onMessage}
          injectedJavaScript={runFirst}
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
