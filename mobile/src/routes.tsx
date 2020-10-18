import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OrphanageMap from './pages/OrphanageMap';
import OrphanageDetails from './pages/OrphanagesDetail';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

const {Navigator, Screen} = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: {backgroundColor: '#f2f3f5'} }} >
                <Screen name="OrphanageMap" component={OrphanageMap}/>
                <Screen name="OrphanageDetails" component={OrphanageDetails} options={{
                    headerShown: true,
                    header: () => <Header showCancel={false} title="Orphanato"/> 
                }}/>
                <Screen name="SelectMapPosition" component={SelectMapPosition}
                options={{
                    headerShown: true,
                    header: () => <Header title="Seleccione no Mapa"/> 
                }}/>
                <Screen name="OrphanageData" component={OrphanageData}
                options={{
                    headerShown: true,
                    header: () => <Header title="Informe os dados"/> 
                }}/>

            </Navigator>
        </NavigationContainer>
    );
}