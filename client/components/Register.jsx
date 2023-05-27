import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import {
  Button,
  Card,
  TextInput,
  Text,
  Menu,
  Divider,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import citiesData from "../utils/il.json";
import { SvgXml } from "react-native-svg";

const svgBackground = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
    <path d="M0,100 C125,160 480,-60 550,40 L500,150 L0,150 Z" style="stroke: none; fill: #c8ddeb;"></path>
  </svg>
`;

const RegisterPage = ({ navigation }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [cityInput, setCityInput] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [fieldValidations, setFieldValidations] = useState({
    firstName: true,
    lastName: true,
    email: true,
    city: true,
    username: true,
    birthDate: true,
    phoneNumber: true,
    password: true,
    confirmPassword: true,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleCityFilter = (text) => {
    const lowerCaseText = text.toLowerCase();
    setCityInput(lowerCaseText);
    if (lowerCaseText === "") {
      setFilteredCities([]);
    } else {
      const filtered = citiesData.filter((city) =>
        city.city.toLowerCase().startsWith(lowerCaseText)
      );
      setFilteredCities(filtered);
    }
  };

  const handleCitySelect = (city) => {
    setCityInput(city);
    setFilteredCities([]);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordsMatch(text === confirmPassword);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
    setPasswordsMatch(password === text);
  };

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const usernameRef = useRef();
  const birthDateRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const validateFirstName = (text) => {
    // English Only, a string max of 20 letters.
    const regex = /^[A-Za-z]{0,20}$/;
    return regex.test(text);
  };

  const validateLastName = (text) => {
    // English Only, a string max of 20 letters.
    const regex = /^[A-Za-z]{0,20}$/;
    return regex.test(text);
  };

  const validateEmail = (text) => {
    // English only, mail@domain.com or . any . there is.
    const regex =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    return regex.test(text);
  };

  const validateUsername = (text) => {
    // Only in English, maximum 15 letters.
    const regex = /^[A-Za-z]{0,15}$/;
    return regex.test(text);
  };

  const validatePhoneNumber = (text) => {
    // /^05\d([-]{0,1})\d{7}$/
    const regex = /^05\d([-]{0,1})\d{7}$/;
    return regex.test(text);
  };

  const validatePassword = (text) => {
    // 8 characters length minimum
    // 1 letter in Upper Case
    // 1 Special Character (!@#$&*)
    // 1 numerals (0-9)
    // 1 letters in Lower Case
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$&*])[A-Za-z\d!@#$&*]{8,}$/;
    return regex.test(text);
  };

  const validateBirthDate = (text) => {
    // /(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})/
    const regex =
      /(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})/;
    return regex.test(text);
  };

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    setFieldValidations((prevValidations) => ({
      ...prevValidations,
      firstName: validateFirstName(text),
    }));
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    setFieldValidations((prevValidations) => ({
      ...prevValidations,
      lastName: validateLastName(text),
    }));
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setFieldValidations((prevValidations) => ({
      ...prevValidations,
      email: validateEmail(text),
    }));
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
    setFieldValidations((prevValidations) => ({
      ...prevValidations,
      username: validateUsername(text),
    }));
  };

  const handleBirthDateChange = (text) => {
    setBirthDate(text);
    setFieldValidations((prevValidations) => ({
      ...prevValidations,
      birthDate: validateBirthDate(text),
    }));
  };

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
    setFieldValidations((prevValidations) => ({
      ...prevValidations,
      phoneNumber: validatePhoneNumber(text),
    }));
  };

  const handleRegisterPress = () => {
    const validations = {
      firstName: validateFirstName(firstName),
      lastName: validateLastName(lastName),
      email: validateEmail(email),
      city: cityInput !== "",
      username: validateUsername(username),
      birthDate: validateBirthDate(birthDate),
      phoneNumber: validatePhoneNumber(phoneNumber),
      password: validatePassword(password),
      confirmPassword: confirmPassword !== "",
    };

    setFieldValidations(validations);

    const isValid = Object.values(validations).every((valid) => valid);

    if (isValid) {
      // Perform registration logic
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.background}>
          <SvgXml xml={svgBackground} width="100%" height="100%" />
        </View>
        <View style={styles.logoContainer}>
          <Image
            source={require("../images/SplashIcon.png")}
            style={styles.logoImage}
          />
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card} elevation={0}>
            <Card.Title title="Registration" titleStyle={styles.cardTitle} />
            <Card.Content>
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <TextInput
                    label="First Name"
                    mode="outlined"
                    style={[
                      styles.input,
                      !fieldValidations.firstName && styles.inputError,
                    ]}
                    error={!fieldValidations.firstName}
                    returnKeyType="next"
                    onSubmitEditing={() => lastNameRef.current.focus()}
                    value={firstName}
                    onChangeText={handleFirstNameChange}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={lastNameRef}
                    label="Last Name"
                    mode="outlined"
                    style={[
                      styles.input,
                      !fieldValidations.lastName && styles.inputError,
                    ]}
                    error={!fieldValidations.lastName}
                    returnKeyType="next"
                    onSubmitEditing={() => emailRef.current.focus()}
                    value={lastName}
                    onChangeText={handleLastNameChange}
                  />
                </View>
              </View>
              <TextInput
                ref={emailRef}
                label="Email"
                mode="outlined"
                style={[
                  styles.input,
                  !fieldValidations.email && styles.inputError,
                ]}
                error={!fieldValidations.email}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => cityRef.current.focus()}
                value={email}
                onChangeText={handleEmailChange}
              />
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={cityRef}
                    label="City"
                    mode="outlined"
                    style={[
                      styles.input,
                      !fieldValidations.city && styles.inputError,
                    ]}
                    error={!fieldValidations.city}
                    value={cityInput}
                    onChangeText={handleCityFilter} // Add this line
                    returnKeyType="next"
                    onSubmitEditing={() => usernameRef.current.focus()}
                  />
                  <Menu>
                    <ScrollView style={styles.menu}>
                      {filteredCities.map((city, index) => (
                        <React.Fragment key={index}>
                          <Menu.Item
                            onPress={() => handleCitySelect(city.city)}
                            title={city.city}
                          />
                          {index !== filteredCities.length - 1 && (
                            <Divider style={styles.divider} />
                          )}
                        </React.Fragment>
                      ))}
                    </ScrollView>
                  </Menu>
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={usernameRef}
                    label="Username"
                    mode="outlined"
                    style={[
                      styles.input,
                      !fieldValidations.username && styles.inputError,
                    ]}
                    error={!fieldValidations.username}
                    returnKeyType="next"
                    onSubmitEditing={() => birthDateRef.current.focus()}
                    value={username}
                    onChangeText={handleUsernameChange}
                  />
                </View>
              </View>
              <TextInput
                ref={birthDateRef}
                label="Birth Date"
                mode="outlined"
                style={[
                  styles.input,
                  !fieldValidations.birthDate && styles.inputError,
                ]}
                error={!fieldValidations.birthDate}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => phoneNumberRef.current.focus()}
                value={birthDate}
                onChangeText={handleBirthDateChange}
              />
              <TextInput
                ref={phoneNumberRef}
                label="Phone Number"
                mode="outlined"
                style={[
                  styles.input,
                  !fieldValidations.phoneNumber && styles.inputError,
                ]}
                error={!fieldValidations.phoneNumber}
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => passwordRef.current.focus()}
                value={phoneNumber}
                onChangeText={handlePhoneNumberChange}
              />
              <View style={styles.row}>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={passwordRef}
                    label="Password"
                    mode="outlined"
                    style={[
                      styles.input,
                      !fieldValidations.password && styles.inputError,
                    ]}
                    error={!fieldValidations.password}
                    secureTextEntry={!passwordVisible}
                    right={
                      <TextInput.Icon
                        name={passwordVisible ? "eye-off" : "eye"}
                        onPress={togglePasswordVisibility}
                        color="black"
                      />
                    }
                    value={password}
                    onChangeText={handlePasswordChange}
                    returnKeyType="next"
                    onSubmitEditing={() => confirmPasswordRef.current.focus()}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    ref={confirmPasswordRef}
                    label="Confirm Password"
                    mode="outlined"
                    style={[
                      styles.input,
                      !fieldValidations.confirmPassword && styles.inputError,
                    ]}
                    error={!fieldValidations.confirmPassword}
                    secureTextEntry={!passwordVisible}
                    right={
                      <TextInput.Icon
                        name={passwordVisible ? "eye-off" : "eye"}
                        onPress={togglePasswordVisibility}
                        color="black"
                      />
                    }
                    value={confirmPassword}
                    onChangeText={handleConfirmPasswordChange}
                    returnKeyType="done"
                    onSubmitEditing={handleRegisterPress}
                  />
                </View>
              </View>
              {!passwordsMatch && (
                <Text style={styles.errorText}>Passwords do not match</Text>
              )}
              {passwordsMatch && password.length > 0 && (
                <Text style={styles.successText}>Passwords match</Text>
              )}
            </Card.Content>
            <Card.Actions
              style={[
                styles.actions,
                { justifyContent: "center", alignItems: "center" },
              ]}
            >
              <Button
                mode="contained"
                style={[styles.registerButton]}
                onPress={handleRegisterPress}
              >
                Register
              </Button>
            </Card.Actions>
            <Card.Actions style={styles.actions}>
              <Text style={styles.signInText}>
                Already registered?{" "}
                <Text
                  style={styles.signInLink}
                  onPress={() => navigation.navigate("Login")}
                >
                  Sign in
                </Text>
              </Text>
            </Card.Actions>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
  },
  menu: {
    maxHeight: 200,
  },
  background: {
    backgroundColor: "#F3F6F8",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  successText: {
    color: "green",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardContainer: {
    width: "80%",
    marginVertical: 20,
    elevation: 4,
    backgroundColor: "#00",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.35)", //transparent register card
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  actions: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  registerButton: {
    width: "50%",
    marginBottom: 10,
    backgroundColor: "#93aec0",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "black",
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: 0,
    alignSelf: "center",
    marginRight: 75,
    marginBottom: -10,
  },
  signInText: {
    fontSize: 14,
    color: "#666",
    marginRight: 75,
    marginTop: 0,
  },
  signInLink: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
  menu: {
    maxHeight: 200,
  },
  divider: {
    backgroundColor: "black",
    height: 1,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
});

export default RegisterPage;
