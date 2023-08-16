import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupName: string) {
  try {
    const storedGroups = await groupsGetAll();
    const filteredGroups = storedGroups.filter((group) => group !== groupName);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(filteredGroups)); //mantem grupos menos o deletado
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`); //deleta referencia de players
  } catch (error) {
    throw error;
  }
}