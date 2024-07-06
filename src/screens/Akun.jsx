// ProfileScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
    // Contoh data pengguna
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
    };

    const handleLogout = () => {
        // Logika untuk melakukan logout
        // Misalnya, navigasi kembali ke halaman login atau membersihkan data sesi
        console.log('Logout');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil Pengguna</Text>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Nama:</Text>
                <Text style={styles.text}>{user.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.text}>{user.email}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'black',
    },
    infoContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
        color: 'black',
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
    button: {
        backgroundColor: '#f4511e',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ProfileScreen;
