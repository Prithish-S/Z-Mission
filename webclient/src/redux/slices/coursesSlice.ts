import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface courseInterface
{
  "courseId":number,
  "courseName":string,
  "courseDescription":string,
  "noOfModules":number,
  "courseDuration":number,
  "imageUrl":string,

}
interface stateInterface
{
  courses:courseInterface[],
  error:number|null,
  loading:boolean
}
const initialState:stateInterface={courses:[],error:null,loading:true};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses:(state,action:PayloadAction<stateInterface>)=>{return action.payload;}
    
  },
})

export const coursesReducer= coursesSlice.reducer;
export const { setCourses } = coursesSlice.actions;
