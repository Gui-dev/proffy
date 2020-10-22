import styled from 'styled-components/native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #F0F0F7;
`

export const FilterButton = styled(BorderlessButton)`

`

export const SearchForm = styled.View`
  margin-bottom: 24px;
`

export const Label = styled.Text`
  font-family: Poppins_400Regular;
  color: #D4C2FF;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#C1BCCC'
})`
  justify-content: center;
  height: 54px;
  margin-top: 4px;
  margin-bottom: 16px;
  padding: 0 16px;
  background-color: #FFF;
  border-radius: 8px;
`

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const InputBlock = styled.View`
  width: 48%;
`

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  background-color: #04D361;
  border-radius: 8px;
`

export const SubmitButtonText = styled.Text`
  font-size: 16px;
  font-family: Archivo_700Bold;
  color: #FFF;
`

export const TeacherListItems = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 16
  }
})`
  margin-top: -40px;
`
