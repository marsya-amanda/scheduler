import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet } from 'react-native';

export default function TabLayout() {

    return (
        <View style={styles.main}>
            <Tabs
                screenOptions={{
                    tabBarInactiveTintColor: 'black',
                    tabBarLabelStyle: {
                    fontSize: 12,
                    },
                    headerTitleAlign: 'center',
                    tabBarStyle: {
                        borderTopWidth: 1,
                        borderTopColor: 'black',
                        height: 90,
                        paddingTop: '2%'
                    }
                }}
            >
            
                <Tabs.Screen name="index" options={{ title: 'home', headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />
                }}/>
                <Tabs.Screen name="friends" options={{ title: 'friends', headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name='people' size={24} color={color} />
                }} />
                <Tabs.Screen name="settings" options={{ title: 'settings', headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="settings" size={24} color={color} />
                }} />
            </Tabs>

        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        height: '106%'
    }
})