import { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import InputField from "../components/InputField";
import SelectDropdown from "react-native-select-dropdown";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function JobFilterModal({
  categories = [],
  educationLevels = [],
  state = [],
  show = false,
  handleClose
}) {

  const [initialState, setFilter] = state;
  const [modalFilters, setModalFilters] = useState(initialState);

  const onChange = (key, value) => {
    setModalFilters((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={show}
      onRequestClose={handleClose}
    >

      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <Text 
            style={{
              // fontFamily: "Roboto-Medium",
              fontSize: 28,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 30,
            }}
          >
            Filter Jobs
          </Text>

          <SelectDropdown
            data={['Male', 'Female', 'None']}
            defaultButtonText={initialState.gender || "Gender requirement"}
            onSelect={(selectedItem) => {
              setModalFilters({
                ...modalFilters,
                gender: selectedItem === 'None' ? null : selectedItem,
              });
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem;
            }}
            rowTextForSelection={(item) => {
              return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />

          <InputField
            value={modalFilters.maxAge || ''}
            onChangeText={(text) => onChange("maxAge", +text)}
            keyboardType="number-pad"
            label="Max. age requirement"
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <SelectDropdown
            data={[...categories, {id: null, name: 'None'}]}
            defaultButtonText={
              initialState.categoryId ? 
              categories.find(el => el.id === initialState.categoryId).name
              : 
              "Category"
            }
            onSelect={(selectedItem) => {
              setModalFilters({
                ...modalFilters,
                categoryId: selectedItem.id,
              });
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem.name;
            }}
            rowTextForSelection={(item) => {
              return item.name;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />

          <SelectDropdown
            data={[...educationLevels, {id: null, education: 'None'}]}
            defaultButtonText={
              initialState.educationId ? 
              educationLevels.find(el => el.id === initialState.educationId).education
              : 
              "Education requirement"
            }
            onSelect={(selectedItem) => {
              setModalFilters({
                ...modalFilters,
                educationId: selectedItem.id,
              });
            }}
            buttonTextAfterSelection={(selectedItem) => {
              return selectedItem.education;
            }}
            rowTextForSelection={(item) => {
              return item.education;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />

          <InputField
            value={modalFilters.location || ''}
            onChangeText={(text) => onChange("location", text)}
            label="Location"
            icon={
              <MaterialIcons
                name="alternate-email"
                size={20}
                color="#666"
                style={{ marginRight: 5 }}
              />
            }
          />

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              // console.log(modalFilters, "<<< Pilih ini");
              setFilter(modalFilters);
              handleClose();
            }}
          >
            <Text style={styles.textStyle}>Filter Jobs</Text>
          </Pressable>
        </View>
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    width: '100%',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  dropdownBtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdownBtnTxtStyle: {
    color: '#444', 
    textAlign: 'left'
  },
  dropdownDropdownStyle: {
    backgroundColor: '#EFEFEF'
  },
  dropdownRowStyle: {
    backgroundColor: '#EFEFEF', 
    borderBottomColor: '#C5C5C5'
  },
  dropdownRowTxtStyle: {
    color: '#444', 
    textAlign: 'left'
  },
});