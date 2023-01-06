import React, {useCallback, useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, Text, Button} from 'react-native';
import {PERMISSIONS, requestMultiple, request} from 'react-native-permissions';
import AudioRecord from 'react-native-audio-record';
import axios from 'axios';
import RNFS from 'react-native-fs';
import {useNavigation} from '@react-navigation/native';
const Recording = props => {
  const navigation = useNavigation();
  let [record, setRecord] = useState(false);
  const onRecord = () => {
    setRecord(!record);
  };

  const requestPermission = () => {
    requestMultiple([
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.READ_MEDIA_AUDIO,
    ]).then(result => {
      console.log(result);
    });

    request(PERMISSIONS.IOS.MICROPHONE).then(result => {
      // …
    });
  };
  const [datas, setDatas] = useState('');
  const [audioFile, setAudioFile] = useState('');
  const [recording, setRecording] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    requestPermission();
    AudioRecord.init(options);
    AudioRecord.on('data', data => {});
  }, []);

  const goToRecord = useCallback(() => {
    navigation.navigate('DetailScreenRecord', {data: datas});
  }, [navigation, datas]);

  const options = {
    sampleRate: 44100, // default 44100
    channels: 1, // 1 or 2, default 1
    bitsPerSample: 16, // 8 or 16, default 16
    audioSource: 6,
    wavFile: 'test.wav', // default 'audio.wav'
  };
  const startRecording = async () => {
    console.log('start recording');
    // Your code to start recording goes here
    setAudioFile('');
    setRecording(true);
    setLoaded(false);

    AudioRecord.start();
    console.log('state recording : ' + recording);
  };
  const stopRecording = async () => {
    if (!recording) return;
    console.log('stop recording');

    // Your code to stop recording goes here
    const res = await AudioRecord.stop();
    console.log('audioFile', res);
    console.log('state recording : ' + recording);
    setAudioFile(res);

    setRecording(false);

    console.log('audioFile : ', res);

    const fileBase64 = await RNFS.readFile(res, 'base64');
    console.log('fileBase64 : ', fileBase64);

    const options = {
      method: 'POST',
      url: 'https://shazam.p.rapidapi.com/songs/v2/detect',
      headers: {
        'content-type': 'text/plain',
        'X-RapidAPI-Key': 'NEED KEY',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      },
      data: fileBase64,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setDatas(response.data);
        goToRecord();
        
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  /* const goToDetail = useCallback(() => {
    navigation.navigate('DetailScreen');
  }, [navigation]);
 */
  /* const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);
 */
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.viewRecord}>
        <Text style={styles.sizeText}>Enregistrement</Text>
        <View style={{flex: 1}} />
        {recording ? (
          <Button onPress={stopRecording} title="Stop recording" />
        ) : (
          <Button onPress={startRecording} title="Start recording" />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'blanchedalmond',
  },
  viewRecord: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    display: 'flex',
    marginVertical: 300,
  },
  sizeText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Recording;
