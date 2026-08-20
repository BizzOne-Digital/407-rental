/**
 * Model-specific exterior photos from Wikimedia Commons.
 * Each URL is tied to the exact vehicle model name in the fleet.
 */
function wiki(url: string): string {
  return url.split('?')[0]
}

export const VEHICLE_IMAGES: Record<string, string> = {
  // Cars & Sedans
  'tesla-model-3': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/ab/Tesla_Model_3_%282023%29_Autofr%C3%BChling_Ulm_IMG_9282.jpg',
  ),
  'mercedes-c-class': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Mercedes-Benz_W206_IMG_6380.jpg',
  ),
  'toyota-corolla': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/f/fe/Toyota_Corolla_Hybrid_%28E210%29_IMG_4338.jpg',
  ),
  'hyundai-elantra': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/a4/2023_Hyundai_Elantra_Limited_in_Silver%2C_front_left%2C_04-04-2026.jpg',
  ),
  'kia-k4': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/f/f9/2025_Kia_K4_LX_in_Azure_Blue%2C_front_right%2C_2024-10-12.jpg',
  ),
  'cadillac-ct5': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/2/28/2024_Cadillac_CT5-V_AWD%2C_front_12.20.24.jpg',
  ),
  'chevrolet-malibu': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/1/1a/Chevrolet_Malibu_LT_%28IX%2C_Facelift%29_%E2%80%93_f_02112024.jpg',
  ),
  'bmw-m340i': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/2/2d/2024_BMW_M340i_xDrive_-_2998cc_3.0_%28374PS%29_Petrol_-_Brooklyn_Grey_-_11-2024%2C_Front.jpg',
  ),
  'bmw-330i': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/f/ff/2019_BMW_330i_M_Sport_2.0_Front.jpg',
  ),
  'honda-accord': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/2/26/2023_Honda_Accord_LX%2C_front_left%2C_07-13-2023.jpg',
  ),
  'volkswagen-jetta': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/aa/2019_Volkswagen_Jetta_1.4T_R-Line_in_Haba%C3%B1ero_Orange_Metallic%2C_front_right.jpg',
  ),
  'dodge-charger': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/2019_Dodge_Charger_SXT_in_B5_Blue_Pearl%2C_Front_Right%2C_05-21-2022.jpg',
  ),
  'audi-a5': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/1/1d/Audi_A5_B10_DSC_7314.jpg',
  ),

  // SUVs & Crossovers
  'tesla-model-y': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/e/e7/Tesla_Model_Y_Premium_%28Facelift%29_%E2%80%93_f_05052026.jpg',
  ),
  'ford-escape': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/3/35/2021_Ford_Escape_Hybrid_SEL_AWD_in_Oxford_White%2C_front_left.jpg',
  ),
  'nissan-rogue': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/ad/2024_Nissan_Rogue_SV_Moonroof_in_Gun_Metallic%2C_front_right%2C_2026-06-14.jpg',
  ),
  'toyota-highlander': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/4/4b/Toyota_Highlander_Hybrid_%28XU70%29_1X7A6356.jpg',
  ),
  'toyota-rav4': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/2/2d/2024_Toyota_RAV4_Prime_XSE_Premium_in_Silver_Sky_with_Midnight_Black_roof%2C_front_left.jpg',
  ),
  'toyota-venza': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/2021_Toyota_Venza_LE%2C_Front_Left%2C_06-20-2021.jpg',
  ),
  'toyota-c-hr': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/a8/Toyota_C-HR_Hybrid_%28AX20%29_DSC_7239.jpg',
  ),
  'honda-cr-v': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/1/1b/Honda_CR-V_e-HEV_Elegance_AWD_%28VI%29_%E2%80%93_f_14072024.jpg',
  ),
  'volkswagen-atlas': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/2/26/2024_Volkswagen_Atlas_IMG_2146.jpg',
  ),
  'ford-explorer': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/2/23/Ford_Explorer_%28sixth_generation%29_IMG_6063.jpg',
  ),
  'hyundai-tucson': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/c/c6/2022_Hyundai_Tucson_Preferred%2C_Front_Right%2C_05-24-2021.jpg',
  ),
  'lexus-nx-300': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/ac/2023_Lexus_NX_450h%2C_front_4.5.23.jpg',
  ),
  'range-rover-sport': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/a/aa/2015_Land_Rover_Range_Rover_Sport_HSE_3.0_Front.jpg',
  ),
  'range-rover-evoque': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/8/84/2019_Land_Rover_Range_Rover_Evoque_R-Dynamic_2.0.jpg',
  ),
  'porsche-macan': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/3/3a/Porsche_Macan_4_IMG_2153.jpg',
  ),
  'jaguar-svr': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/b/bb/2019_Jaguar_F-Pace_SVR%2C_Greenwich_2018.jpg',
  ),
  'chevrolet-trax': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/3/39/2024_Chevrolet_Trax_2RS%2C_front_left%2C_12-10-2023.jpg',
  ),

  // Trucks
  'ford-f-150': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/8/8b/2024_Ford_F-150_SuperCrew_Tremor_in_Avalanche%2C_front_right%2C_2024-09-03.jpg',
  ),
  'gmc-sierra': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/3/36/2024_GMC_Sierra_Elevation_Crew_Cab_in_Summit_White%2C_front_left.jpg',
  ),
  'chevrolet-silverado': wiki(
    'https://upload.wikimedia.org/wikipedia/commons/b/b3/2022_Chevrolet_Silverado_2500HD_High_Country%2C_Front_Left%2C_11-21-2021.jpg',
  ),
}

export function getVehicleImage(id: string): string {
  return VEHICLE_IMAGES[id] ?? VEHICLE_IMAGES['toyota-corolla']
}
