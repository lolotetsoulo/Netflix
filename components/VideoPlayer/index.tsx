import React , { useRef, useState, useEffect } from 'react';
import {Episode} from '../../types';
import { View, Text } from 'react-native'
import {Video} from 'expo-av';
import styles from '../../components/VideoPlayer/styles';
import { Playback } from 'expo-av/build/AV';

interface VideoPlayerProps{
    episode: Episode;
}



const VideoPLayer = (props: VideoPlayerProps) => {
    const {episode} = props;
    const video = useRef<Playback>(null);

    const [status, setStatus] = useState({});
    
    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    }, [episode])

    return (
        <Video
            ref = {video}
            style = {styles.video}
            source ={{
                uri: episode.video
            }}
            posterSource={{
                uri: episode.poster
            }}
            posterStyle={{
                resizeMode:'cover'
            }}
            usePoster={true}
            useNativeControls
            resizeMode = 'contain'
            onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
    );
}

export default VideoPLayer;