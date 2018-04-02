import { Setting } from '../../model/Setting';

export const settings: Setting[] = [
  {
    settingId: 1,
    alias: 'global',
    trainersPerPage: 0,
    reportGrads: 22,
    batchLength: 11,
    reportIncomingGrads: 26,
    minBatchSize: 10,
    maxBatchSize: 20,
    trainerBreakDays: 14,
    defaultLocation: 1,
    defaultBuilding: null,
    defaultNamePattern: '$y$m $mmm$d $c'
  }
];
