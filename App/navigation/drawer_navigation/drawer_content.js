import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {  Avatar,  Title,  Caption,  Drawer, } from "react-native-paper";

export default function DrawerContent(props) {
  return (
     
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop:0,marginTop:0}}>
    
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
            <Title style={styles.title}>All Menu</Title>
        </View>

        <Drawer.Section style={styles.drawerSection} title="Customer">
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="account" style={{ backgroundColor: '#fff'}} />
                )}
                label="Customer"
                onPress={() => {props.navigation.navigate('CustomerPage')}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="contacts" style={{ backgroundColor: '#fff'}} />
                )}
                label="Contact"
                onPress={() => {props.navigation.navigate('ContactPage')}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="tag" style={{ backgroundColor: '#fff'}} />
                )}
                label="Product Offering"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-bar-stacked" style={{ backgroundColor: '#fff'}} />
                )}
                label="Opportunities"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="library" style={{ backgroundColor: '#fff'}} />
                )}
                label="Sales Literature"
                onPress={() => {}}
            />
        </Drawer.Section>

        <Drawer.Section title="Activities">
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="format-list-checks" style={{ backgroundColor: '#fff'}} />
                )}
                label="Task"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="calendar-month" style={{ backgroundColor: '#fff'}} />
                )}
                label="Appointment"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="phone" style={{ backgroundColor: '#fff'}} />
                )}
                label="Phone Call"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="android-messages" style={{ backgroundColor: '#fff'}} />
                )}
                label="Messaging"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="account-multiple" style={{ backgroundColor: '#fff'}} />
                )}
                label="Observe Visit"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="headphones" style={{ backgroundColor: '#fff'}} />
                )}
                label="Observe Call"
                onPress={() => {}}
            />
        </Drawer.Section>

        <Drawer.Section title="Sales Measurement">
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-areaspline" style={{ backgroundColor: '#fff'}} />
                )}
                label="Sales Scorecard"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-bell-curve" style={{ backgroundColor: '#fff'}} />
                )}
                label="Sales Scorecard Graphic"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-donut" style={{ backgroundColor: '#fff'}} />
                )}
                label="Service Scorecard"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-line-variant" style={{ backgroundColor: '#fff'}} />
                )}
                label="Sasaran Kerja Individu"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-timeline" style={{ backgroundColor: '#fff'}} />
                )}
                label="Monthly Sales Contest"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-arc" style={{ backgroundColor: '#fff'}} />
                )}
                label="Quarterly Sales Contest"
                onPress={() => {}}
            />
        </Drawer.Section>

        <Drawer.Section title="Report">
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-line-stacked" style={{ backgroundColor: '#fff'}} />
                )}
                label="Activity Report"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-donut-variant" style={{ backgroundColor: '#fff'}} />
                )}
                label="Sales Hit Ratio"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="chart-bar" style={{ backgroundColor: '#fff'}} />
                )}
                label="Sales Result"
                onPress={() => {}}
            />
            <DrawerItem
                icon={({ color, size }) => (
                    <Avatar.Icon size={38} icon="target" style={{ backgroundColor: '#fff'}} />
                )}
                label="Goals"
                onPress={() => {}}
            />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfoSection: {
      margin:0,
      paddingTop:20,
    paddingLeft: 20,
    alignItems:'center'
   
  },
  title: {
    color:'#000',
    fontWeight: "bold",
  },
  caption: {
    color:'#fff',
    fontSize: 14,
    lineHeight: 14,
    paddingBottom:20,
  },
  row: {
   
    marginBottom:10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});