import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Card, TextInput, Text } from "react-native-paper";
import CustomDatePicker from "./CustomDatePicker"; // Import the CustomDatePicker component

class RegisterPage extends React.Component {
  componentDidUpdate(prevProps) {
    // Check if props have changed and perform data fetching or side effects here
    if (this.props.someProp !== prevProps.someProp) {
      // Perform data fetching or side effects based on prop changes
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={require("../images/SplashIcon.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.contentContainer}>
          <Card style={styles.card}>
            <Card.Title title="Registration" titleStyle={styles.cardTitle} />
            <Card.Content>
              <TextInput
                label="First Name"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="Last Name"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="Username"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="Email"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="Phone Number"
                mode="outlined"
                style={styles.input}
                keyboardType="numeric"
              />
              <CustomDatePicker
                style={styles.input}
                date={null}
                mode="date"
                placeholder="Select Birth Date"
                format="YYYY-MM-DD"
                minDate="1900-01-01"
                maxDate="2100-12-31"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput: {
                    borderWidth: 0,
                    alignItems: "flex-start",
                  },
                  // Add any other custom styles if needed
                }}
                useNativeDriver // Set useNativeDriver to true or false as needed
                onDateChange={(date) => {
                  // Handle selected date
                }}
              />
              <TextInput
                label="City"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="Password"
                mode="outlined"
                style={styles.input}
                secureTextEntry
              />
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button
                mode="contained"
                style={styles.registerButton}
                onPress={() => {} /* Add registration logic */}
              >
                Register
              </Button>
            </Card.Actions>
            <Text style={styles.signInText}>
              Already registered?{" "}
              <Text
                style={styles.signInLink}
                onPress={() => navigation.navigate("Login")}
              >
                Sign in
              </Text>
            </Text>
          </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    marginVertical: 20,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  registerButton: {
    width: "100%",
    marginBottom: 10,
  },
  signInText: {
    fontSize: 14,
    color: "#666",
  },
  signInLink: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});

export default RegisterPage;
