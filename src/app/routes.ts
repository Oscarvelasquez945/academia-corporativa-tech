import { createBrowserRouter } from 'react-router'
import AppShell from './App'
// Components are exported through the module object to keep a compact prototype implementation.
import * as Screens from './App'

export const router=createBrowserRouter([{path:'/',Component:(Screens as any).Layout,children:[
 {index:true,Component:(Screens as any).Home},{path:'cursos',Component:(Screens as any).Catalog},{path:'cursos/:slug',Component:(Screens as any).CourseDetail},{path:'login',Component:()=> <Screens.Auth/>},{path:'registro',Component:()=> <Screens.Auth register/>},
 {path:'panel',Component:()=> <Screens.Guard><Screens.Dashboard/></Screens.Guard>},{path:'mi-aprendizaje',Component:()=> <Screens.Guard><Screens.MyLearning/></Screens.Guard>},{path:'aprender/excel-basico',Component:()=> <Screens.Guard><Screens.LearnIndex/></Screens.Guard>},{path:'aprender/excel-basico/leccion/:id',Component:()=> <Screens.Guard><Screens.Lesson/></Screens.Guard>},{path:'evaluacion/excel-basico',Component:()=> <Screens.Guard><Screens.Quiz/></Screens.Guard>},{path:'evaluacion/excel-basico/resultado',Component:()=> <Screens.Guard><Screens.QuizResult/></Screens.Guard>},{path:'certificados',Component:()=> <Screens.Guard><Screens.Certificates/></Screens.Guard>},{path:'perfil',Component:()=> <Screens.Guard><Screens.Profile/></Screens.Guard>},{path:'*',Component:(Screens as any).NotFound}
]}])
