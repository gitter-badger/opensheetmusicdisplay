import { MusicSheet } from "../MusicSheet";
import { IXmlElement } from "../../Common/FileIO/Xml";
export declare class MusicSheetReader {
    private repetitionInstructionReader;
    private repetitionCalculator;
    private musicSheet;
    private completeNumberOfStaves;
    private currentMeasure;
    private previousMeasure;
    private currentFraction;
    readonly CompleteNumberOfStaves: number;
    private static doCalculationsAfterDurationHasBeenSet(instrumentReaders);
    createMusicSheet(root: IXmlElement, path: string): MusicSheet;
    private _removeFromArray(list, elem);
    private trimString(str);
    private _lastElement<T>(list);
    private _createMusicSheet(root, path);
    private initializeReading(partList, partInst, instrumentReaders);
    private checkIfRhythmInstructionsAreSetAndEqual(instrumentReaders);
    private areRhythmInstructionsMixed(rhythmInstructions);
    private setSourceMeasureDuration(instrumentReaders, sourceMeasureCounter);
    private checkFractionsForEquivalence(maxInstrumentDuration, activeRhythm);
    private checkIfMeasureIsImplicit(maxInstrumentDuration, activeRhythm);
    private allInstrumentsHaveSameDuration(instrumentsDurations, maxInstrumentDuration);
    private staffMeasureIsEmpty(index);
    private checkSourceMeasureForundefinedEntries();
    private pushSheetLabels(root, filePath);
    private presentAttrsWithValue(elem, val);
    private readComposer(root);
    private readTitleAndComposerFromCredits(root);
    private computeSystemYCoordinates(root);
    private readTitle(root);
    private createInstrumentGroups(entryList);
    private getCompleteNumberOfStavesFromXml(partInst);
    private getInstrumentNumberOfStavesFromXml(partNode);
}
