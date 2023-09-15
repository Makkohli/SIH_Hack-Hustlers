import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Backups from "./App/Components/Backups";
import Contact from "./App/Components/Contact";
import RateApp from "./App/Pages/RateApp";
import Settings from "./App/Components/Settings";
import Home from "./App/Pages/Home";
import Login from "./App/Pages/LoginScreen";
import Invoices from "./App/Pages/Invoices";
import CreateBill from "./App/Pages/CreatBill";


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView>
            <View
              style={{
                height: 200,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderBottomColor: "#f4f4f4",
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  marginVertical: 6,
                  fontWeight: "bold",
                  color: "#111",
                }}
              >
                YourBiller
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#111",
                }}
              >
                Welcome!
              </Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        );
      }}
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#fff", //drawer ka background
          width: 250,
        },
        headerStyle: {
          backgroundColor: "#0C7DE4", //header ka color
        },
        headerTintColor: "#fff", //top name of header
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerLabelStyle: {
          color: "#111",
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="#808080" />
          ),
        }}
        component={Home}
      />

      <Drawer.Screen
        name="Invoices"
        options={{
          drawerLabel: "Invoice",
          title: "Invoice",
          drawerIcon: () => (
            <SimpleLineIcons name="book-open" size={20} color="#808080" />
          ),
        }}
        component={StackNavigator}
      />

      <Drawer.Screen
        name="Login"
        options={{
          drawerLabel: "Login",
          title: "Login",
          drawerIcon: () => (
            <SimpleLineIcons name="login" size={20} color="#808080" />
          ),
        }}
        component={Login}
      />

      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),
        }}
        component={Settings}
      />

      <Drawer.Screen
        name="Backups"
        options={{
          drawerLabel: "Backups",
          title: "Backups",
          drawerIcon: () => (
            <MaterialIcons name="backup" size={20} color="#808080" />
          ),
        }}
        component={Backups}
      />

      <Drawer.Screen
        name="Rate this App"
        options={{
          drawerLabel: "Rate this App",
          title: "Rate this App",
          drawerIcon: () => (
            <FontAwesome name="star" size={20} color="#808080" />
          ),
        }}
        component={RateApp}
      />

      <Drawer.Screen
        name="Contact"
        options={{
          drawerLabel: "Contact",
          title: "Contact",
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="message-alert-outline"
              size={20}
              color="#808080"
            />
          ),
        }}
        component={Contact}
      />
    </Drawer.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="HomeScreen"
        component={Invoices}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CreateBill" component={CreateBill} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
