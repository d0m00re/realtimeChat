import {UPDATE_FINAL_MAP, UPDATE_TMP_MAP, UPDATE_TETRIMINOS_POS,
    TETRI_ROTATION, UPDATE_USERNAME, UPDATE_ROOM} from '../Constant';

export const updateFinalMap = payload => ({
    type : UPDATE_FINAL_MAP,
    payload
})

export const updateTmpMap  = payload => ({
    type : UPDATE_TMP_MAP,
    payload
})

export const updateTetriminosPos  = payload => ({
    type : UPDATE_TETRIMINOS_POS,
    payload
})

export const tetriRotation = payload => ({
    type : TETRI_ROTATION,
    payload
})

export const updateUsername = payload => ({
    type : UPDATE_USERNAME,
    payload
})

export const updateRoom = payload => ({
    type : UPDATE_ROOM,
    payload
})