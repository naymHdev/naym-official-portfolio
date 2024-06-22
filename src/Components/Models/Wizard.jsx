/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  const [error, setError] = useState(null);
  const { nodes, materials } = useGLTF(
    "/Public/models/wizard-transformed.glb",
    undefined,
    setError
  );

  const modelRef = useRef();

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y =
        -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  const geometryMaterials = useMemo(
    () => [
      {
        geometry: nodes.Evil_Hathattty_mesh_Evil_HatBLN_Hat_0.geometry,
        material: materials.Evil_HatBLN_Hat,
      },
      {
        geometry: nodes.WandpCylinder1_Wandq_0.geometry,
        material: materials.PaletteMaterial001,
      },
      {
        geometry: nodes.R_shoe_tongue_mesh_BLN_Shoe_tongue_0.geometry,
        material: materials.BLN_Shoe_tongue,
      },
      {
        geometry: nodes.Chest_piece_mesh_BLN_chest_piece_0.geometry,
        material: materials.BLN_chest_piece,
      },
      {
        geometry: nodes.Right_Eyeball_Mesh_Lam_eyeball_0.geometry,
        material: materials.material_0,
      },
      {
        geometry: nodes.pants_mesh_BLN_Pants_0.geometry,
        material: materials.BLN_Pants,
      },
      {
        geometry: nodes.lower_coat_mesh_FK_BLN_Lower_coat_0.geometry,
        material: materials.BLN_Lower_coat,
      },
      {
        geometry: nodes.R_shoe_mesh_BLN_shoes_0.geometry,
        material: materials.BLN_shoes,
      },
      {
        geometry: nodes.Upper_coat_mesh_BLN_upper_coat_0.geometry,
        material: materials.BLN_upper_coat,
      },
      {
        geometry: nodes.upper_body_mesh_BLN_shirt_0.geometry,
        material: materials.BLN_shirt,
      },
      {
        geometry: nodes.upper_body_mesh_BLN_Shirt_collar_0.geometry,
        material: materials.BLN_Shirt_collar,
      },
      {
        geometry: nodes.Coat_collar_mesh_BLN_collar_piece_0.geometry,
        material: materials.BLN_collar_piece,
      },
      {
        geometry: nodes.BookpolySurface5_Bookblinn1_0.geometry,
        material: materials.Bookblinn1,
      },
      {
        geometry: nodes.BookBook_corner_mesh4_Booklam_book_corners_0.geometry,
        material: materials.Booklam_book_corners,
      },
      {
        geometry: nodes.BookpolySurface20_BookBLN_Metal_parts_0.geometry,
        material: materials.BookBLN_Metal_parts,
      },
      {
        geometry: nodes.BookFront_glow_mesh_Booklambert8_0.geometry,
        material: materials.PaletteMaterial002,
      },
      {
        geometry: nodes.BookpolySurface2_BookBLN_Book_covers_0.geometry,
        material: materials.BookBLN_Book_covers,
      },
      {
        geometry: nodes.BookpCube10_Booklam_front_bits_0.geometry,
        material: materials.material_2,
      },
      {
        geometry: nodes.BookpolySurface28_Booklam_back_bits_0.geometry,
        material: materials.Booklam_back_bits,
      },
      {
        geometry: nodes.Evil_HatpPlane1_Evil_HatsolidShader_0.geometry,
        material: materials.PaletteMaterial003,
      },
    ],
    [nodes, materials]
  );

  if (error) {
    return <div>Error loading model: {error.message}</div>;
  }

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      position={[0, -1.5, 0]}
      scale={[0.06, 0.06, 0.06]}
      rotation={[0.25, 0, 0]}
    >
      {geometryMaterials.map((item, index) => (
        <mesh
          key={index}
          castShadow
          receiveShadow
          geometry={item.geometry}
          material={item.material}
          position={[-1.057, 0, 0]}
          rotation={[0, 0.224, 0]}
          scale={0.832}
        />
      ))}
    </group>
  );
});

export default Wizard;
useGLTF.preload("/Public/models/wizard-transformed.glb");
