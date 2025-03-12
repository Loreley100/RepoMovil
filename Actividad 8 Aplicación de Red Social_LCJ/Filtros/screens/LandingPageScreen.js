
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView, StatusBar, TouchableOpacity, ScrollView, Button } from 'react-native';
import { useContext,  useEffect } from 'react';
import { UsuarioContext } from '../components/context/UsuarioContext';

const imgLanding = require('../assets/img-landing.jpg');

const LandingPageScreen = ({ navigation }) => {

    const [login, loginAction] = useContext(UsuarioContext);

    /*
    // Funcion que permite iniciar sesion
    const iniciarSesion = () => {
        loginAction({ type: 'sing-in', data: { nombre: 'Juan' } })
    }

    /* Esto es nada mas para saber si el estado cambiaba, se puede borrar despues xddd 
    useEffect(() => {
        console.log("Nuevo estado:", login)
    }, [login])

    */
   
    return (

        <SafeAreaView style={styles.safeContainer}>
            <ScrollView>

                {/* La pequeña navbar de arriba */}
                <View style={{ backgroundColor: "#0077B6" }}>
                    <View style={styles.navbar}>
                        <Text style={styles.navbarText}>MultiSeguros+</Text>
                    </View>
                </View>

                {/* Imagen */}
                <View style={styles.imageContainer}>
                    <Image
                        source={imgLanding}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                {/* Botones */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 40 }}>

                    <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.primaryButtonText}>Iniciar sesión</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.secondaryButton} onPress={() => navigation.navigate('PreRegisterProspect')}>
                        <Text style={styles.secondaryButtonText}>Iniciar pre-registro</Text>
                    </TouchableOpacity>

                </View>


                {/* Presentación */}
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30, paddingVertical: 40 }}>
                    <Text style={styles.sectionTitle}>Presentación</Text>
                    <Text style={styles.description}>
                        Nuestro sistema está diseñado para agentes de seguros que buscan una plataforma ágil, eficiente y segura para gestionar sus ventas. Con nuestras herramientas, podrás cotizar, personalizar y vender pólizas de forma rápida, brindando a tus clientes la mejor experiencia.
                    </Text>
                </View>



            </ScrollView>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    navbar: {
        height: 80,
        backgroundColor: "#0077B6",
        justifyContent: "center",
        alignItems: "center",
        marginTop: StatusBar.currentHeight // Para que el navbar no se superponga con la barra de estado
    },
    navbarText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    imageContainer: {
        marginTop: 10,
        width: "100%", // Que el contenedor ocupe todo el ancho
        height: 350
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover", // Hace que la imagen cubra todo el div
    },
    primaryButton: {
        backgroundColor: '#0072B1',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '65%',
        alignItems: 'center',
        marginBottom: 10,
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    secondaryButton: {
        borderWidth: 2,
        borderColor: '#0072B1',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '65%',
        alignItems: 'center',
        marginBottom: 10,
    },
    secondaryButtonText: {
        color: '#0072B1',
        fontSize: 18,
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
    },
});

export default LandingPageScreen;