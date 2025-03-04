import { ZoottelkeeperPluginSettings } from "../interfaces"

export const isInAllowedFolder = (settings: ZoottelkeeperPluginSettings, indexFilePath: string): boolean => {
    return settings.foldersIncluded === '' || isInSpecificFolder(settings, indexFilePath, 'foldersIncluded');

}

export const isInDisAllowedFolder = (settings: ZoottelkeeperPluginSettings, indexFilePath: string): boolean => {
    return isInSpecificFolder(settings, indexFilePath, 'foldersExcluded');
}

export const isInSpecificFolder = (settings: ZoottelkeeperPluginSettings, indexFilePath: string, folderType: string): boolean => {
    return !!settings[folderType].split(',').find((folder: any) => indexFilePath.startsWith(folder.trim()))
}

