/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 MDL_Env_Lubricantes.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/MDL_Env_Lubricantes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MDL_Bases.geometry} material={materials.MAT_Bases} />
      <mesh geometry={nodes.MDL_Cajas.geometry} material={materials.Mat_Caja} />
      <mesh geometry={nodes.MDL_Cajas001.geometry} material={materials.Mat_Caja} />
      <mesh geometry={nodes.MDL_Detalles.geometry} material={materials.MAT_Detalles} />
      <mesh geometry={nodes.MDL_Empaquetado_01.geometry} material={materials.MAT_Empaquetado_01} />
      <mesh geometry={nodes.MDL_Empaquetado_02.geometry} material={materials.MAT_Empaquetado_02} />
      <mesh geometry={nodes.MDL_Emtapado.geometry} material={materials.MAT_Emtapado_01} />
      <mesh geometry={nodes.MDL_Emtapado_2.geometry} material={materials.MAT_Emtapado_02} />
      <mesh geometry={nodes.MDL_Emtapado_3.geometry} material={materials.MAT_Emtapado_03} />
      <mesh geometry={nodes.MDL_Espiral.geometry} material={materials.MAT_Espiral} />
      <mesh geometry={nodes.MDL_Etiquetado.geometry} material={materials.MAT_Etiquetado} />
      <mesh geometry={nodes.MDL_Oil.geometry} material={materials.MAT_Oil} />
      <mesh geometry={nodes.MDL_Paredes.geometry} material={materials.MAT_Paredes} />
      <mesh geometry={nodes.MDL_Plastic_Barrel.geometry} material={materials.MAT_Barrel} />
      <mesh geometry={nodes.Mesh070.geometry} material={materials.MAT_Base_Madera} />
      <mesh geometry={nodes.Mesh070_1.geometry} material={nodes.Mesh070_1.material} />
      <mesh geometry={nodes.Mesh085.geometry} material={materials.MAT_Envase_Mobil} />
      <mesh geometry={nodes.Mesh085_1.geometry} material={materials.MAT_Envase_Mobil_Sin} />
      <mesh geometry={nodes.Mesh026.geometry} material={materials.MAT_Rampa} />
      <mesh geometry={nodes.Mesh026_1.geometry} material={materials.MAT_Caucho} />
    </group>
  )
}

useGLTF.preload('/MDL_Env_Lubricantes.glb')