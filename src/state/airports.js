import { createAction, createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

export const setAeropuestos = createAction("SET_AIRPORTS");

const initialState = { airports: [] };

export const airportReducer = createReducer(initialState, {
  [setAeropuestos]: (state, action) => state = action.payload
});



