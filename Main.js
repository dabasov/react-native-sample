import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
                       style={{width: 400, height: 400}} />
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>@dabasov</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('details')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});