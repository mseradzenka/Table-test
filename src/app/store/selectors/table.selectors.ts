import { createFeatureSelector, createSelector } from '@ngrx/store';

const featureSelector = createFeatureSelector('table');

export const getTableData = createSelector(featureSelector, ({ tableData }) => tableData);