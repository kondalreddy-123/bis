const rows=[
['IS-LGT-001','IS 10322 (Part 5/Sec 1)','Luminaires — General Requirements','Lighting','Electrical','Requirements for luminaires and lighting equipment.','Active','2012',['LED luminaires','street lighting'],['LED','light','luminaire','lighting','electrical','outdoor'],['Electrical safety','Insulation','Protection'],['Electrical safety test','Photometric test'],['IS-LGT-002'],'', ''],
['IS-LGT-002','IS 16107','LED luminaires — Performance Requirements','Lighting','Electrical','Performance characteristics for LED luminaires.','Active','2012',['LED street light','LED fixture'],['LED','street','energy','efficiency','luminaire'],['Electrical safety','Thermal safety'],['Photometric testing','Performance testing'],['IS-LGT-001'],'',''],
['IS-ELC-001','IS 694','PVC insulated cables','Electrical','Electrical','PVC insulated cables for supply and distribution.','Active','2010',['Building cable','power cable'],['cable','PVC','insulation','wire','electrical'],['Insulation','Shock protection'],['Voltage test','Insulation test'],[],'',''],
['IS-ELC-002','IS 732','Electrical wiring installations','Electrical','Electrical','Code of practice for electrical wiring installations.','Active','2019',['Building wiring','government building'],['wiring','installation','electrical','building'],['Earthing','Shock protection'],['Continuity test','Insulation test'],['IS-ELC-001'],'',''],
['IS-CON-001','IS 456','Plain and reinforced concrete — Code of practice','Construction','Construction','General structural concrete design and construction provisions.','Active','2000',['Concrete','public construction'],['cement','concrete','strength','construction'],['Strength','Structural safety'],['Compressive strength'],['IS-CON-002'],'',''],
['IS-CON-002','IS 269','Ordinary Portland Cement — Specification','Cement','Construction','Specification for ordinary Portland cement.','Active','2013',['Cement','concrete works'],['cement','OPC','strength','construction'],['Quality','Strength'],['Fineness test','Strength test'],['IS-CON-001'],'',''],
['IS-WAT-001','IS 10500','Drinking water — Specification','Water','Water','Quality requirements for drinking water.','Active','2012',['Drinking water'],['water','drinking','quality','treatment'],['Public health','Contamination control'],['Chemical test','Microbiological test'],[],'',''],
['IS-WAT-002','IS 12269','High strength ordinary Portland cement','Water','Construction','Specification reference useful for concrete procurement.','Active','2013',['Construction'],['cement','strength'],['Quality'],['Strength test'],['IS-CON-002'],'',''],
['IS-MEC-001','IS 9079','Power driven pumps — Technical requirements','Mechanical','Water','Requirements for monoblock and centrifugal pumps.','Active','2018',['Water pump','irrigation'],['pump','water','motor','flow','pressure'],['Mechanical safety','Electrical safety'],['Flow test','Pressure test'],[],'',''],
['IS-SAF-001','IS 2925','Industrial safety helmets','Safety','PPE','Protective helmets for industrial workers.','Active','1984',['Construction worker','industrial worker'],['helmet','PPE','construction','worker','impact'],['Impact protection','Chin strap'],['Impact test','Penetration test'],[],'',''],
['IS-IT-001','IS 13252','Safety of information technology equipment','IT','IT','Safety requirements for information technology equipment.','Active','2010',['Computer','IT equipment'],['computer','IT','equipment','electrical'],['Electrical safety','Fire enclosure'],['Dielectric test','Temperature test'],[],'',''],
['IS-FUR-001','IS 17631','Office work chairs — Performance requirements','Consumer Products','Furniture','Prototype record for office seating requirements.','Active','2021',['Office chair'],['chair','office','ergonomic','furniture'],['Stability','Load safety'],['Load test','Stability test'],[],'',''],
['IS-AGR-001','IS 15984','Agricultural irrigation equipment','Agriculture','Agriculture','Prototype record for irrigation equipment.','Active','2012',['Irrigation'],['agriculture','irrigation','pump','farm'],['Operational safety'],['Flow test'],[],'',''],
['IS-FOOD-001','IS 4251','Quality tolerances for processed food products','Food','Food','Prototype record for food quality procurement.','Active','2020',['Processed food'],['food','quality','processed'],['Hygiene','Contamination control'],['Quality test','Microbiological test'],[],'',''],
['IS-ENE-001','IS 16046','Energy efficiency requirements for equipment','Energy','Energy','Prototype record for energy efficiency evaluation.','Review','2019',['Energy efficient equipment'],['energy','efficiency','power','saving'],['Electrical safety'],['Energy performance test'],[],'',''],
['IS-LGT-003','IS 1944','Code of practice for lighting of public thoroughfares','Lighting','Electrical','Lighting guidance for public roads and thoroughfares.','Active','1970',['Road lighting','public road'],['street','road','lighting','municipal','outdoor'],['Electrical safety','Roadside safety'],['Illumination test','Photometric test'],['IS-LGT-001'],'',''],
['IS-ELC-003','IS 3043','Code of practice for earthing','Electrical','Electrical','Earthing provisions for electrical installations.','Active','2018',['Electrical installation'],['earthing','grounding','electrical'],['Shock protection'],['Earth resistance test'],['IS-ELC-002'],'',''],
['IS-SAF-002','IS 4770','Rubber gloves for electrical protection','Safety','PPE','Protective gloves for electrical work.','Active','1991',['Electrical worker'],['gloves','electrical','PPE','safety'],['Shock protection'],['Dielectric test'],[],'',''],
['IS-CON-003','IS 10262','Concrete mix proportioning','Construction','Construction','Guidance for concrete mix proportioning.','Active','2019',['Concrete mix'],['concrete','mix','construction','strength'],['Structural safety'],['Compressive strength'],['IS-CON-001'],'',''],
['IS-WAT-003','IS 10500-W','Water quality testing methods','Water','Water','Prototype testing-method record for water quality.','Review','2020',['Water testing'],['water','testing','quality'],['Public health'],['Chemical test','Microbiological test'],['IS-WAT-001'],'',''],
['IS-MEC-002','IS 1343','Prestressed concrete — Code of practice','Mechanical','Construction','Prototype mechanical/construction record.','Active','2012',['Construction'],['concrete','prestressed'],['Structural safety'],['Strength test'],['IS-CON-001'],'',''],
['IS-SAF-003','IS 15298','Personal protective equipment — footwear','Safety','PPE','Protective footwear requirements.','Active','2011',['Safety footwear'],['PPE','footwear','worker','safety'],['Impact protection','Slip resistance'],['Impact test','Slip test'],[],'',''],
['IS-ENE-002','IS 16500','LED driver energy performance','Energy','Lighting','Prototype record for LED driver performance.','Active','2018',['LED driver'],['LED','driver','energy','power'],['Electrical safety'],['Energy performance test'],['IS-LGT-002'],'',''],
['IS-CONS-001','IS 302','Safety of household and similar electrical appliances','Consumer Products','Electrical','Safety requirements for household and similar appliances.','Active','2008',['Appliance'],['appliance','electrical','household','safety'],['Shock protection','Thermal safety'],['Dielectric test','Temperature test'],[],'',''],
['IS-AGR-002','IS 7906','Agricultural machinery safety','Agriculture','Agriculture','Prototype record for machinery used in agriculture.','Active','2015',['Agricultural machinery'],['tractor','machine','agriculture','safety'],['Guarding','Mechanical safety'],['Safety test'],[],'',''],
['IS-FOOD-002','IS 5402','Microbiological examination of food','Food','Food','Microbiological examination method record.','Active','2012',['Food testing'],['food','microbiological','testing'],['Hygiene'],['Microbiological test'],['IS-FOOD-001'],'','']
];
const demoProductsByDomain={
  Electrical:['LED Street Light 50W','LED Street Light 90W','PVC Building Cable 1.5 sq mm'],
  Lighting:['LED Street Light 50W','LED Street Light 90W','Outdoor LED Luminaire'],
  Construction:['RCC Concrete Mix','Ready-Mix Concrete','Construction Cement'],
  Cement:['OPC Cement 43 Grade','OPC Cement 53 Grade','General Construction Cement'],
  Water:['Drinking Water Unit','Water Quality Testing Kit','Municipal Water Supply'],
  Mechanical:['Monoblock Water Pump','Agricultural Water Pump','Centrifugal Pump'],
  Safety:['Industrial Safety Helmet','Electrical Safety Gloves','Protective Footwear'],
  IT:['Desktop Computer','Business Laptop','IT Equipment'],
  'Consumer Products':['Household Electrical Appliance','Office Work Chair','Consumer Product'],
  Furniture:['Office Work Chair','Ergonomic Chair','Visitor Chair'],
  Agriculture:['Agricultural Pump','Irrigation Equipment','Farm Machinery'],
  Food:['Packaged Food Product','Processed Food','Food Testing Sample'],
  Energy:['LED Driver','Energy-Efficient Equipment','Lighting Equipment']
};
const revisionMeta={
  'IS 456:2000':{revision:'Fourth Revision',latestAmendment:'Amendment 6 — 2024',reviewedIn:2025},
  'IS 694:2010':{revision:'Fourth Revision',latestAmendment:'No amendment shown in current BIS record',reviewedIn:2020},
  'IS 732:2019':{revision:'Fourth Revision',latestAmendment:'No amendment shown in current BIS record',reviewedIn:2024},
  'IS 10500:2012':{revision:'Second Revision',latestAmendment:'Third Amendment — 2020',reviewedIn:2023},
  'IS 9079:2018':{revision:'Third Revision',latestAmendment:'No amendment shown in current BIS record',reviewedIn:2022},
  'IS 2925:1984':{revision:'Second Revision',latestAmendment:'No amendment shown in current BIS record',reviewedIn:2025},
  'IS 13252:2010':{revision:'Second Revision',latestAmendment:'Second Amendment — 2015',reviewedIn:2025},
  'IS 10262:2019':{revision:'Second Revision',latestAmendment:'Verify current BIS record',reviewedIn:2023},
  'IS 1343:2012':{revision:'Second Revision',latestAmendment:'Verify current BIS record',reviewedIn:2022}
};
const bisVerifyUrl='https://standards.bis.gov.in/';
export const standards=rows.map((r,i)=>{const meta=revisionMeta[r[1]]||{revision:'Edition '+r[7],latestAmendment:'Verify current BIS record',reviewedIn:null};const products=demoProductsByDomain[r[4]]||demoProductsByDomain[r[3]]||['Example product using this standard','Procurement product example','Compliant product example'];return {id:r[0],standardNumber:r[1],title:r[2],category:r[3],domain:r[4],description:r[5],status:r[6],year:r[7],edition:r[7],latestVersion:meta.revision ? `${r[1]} — ${meta.revision}` : `${r[1]} — Edition ${r[7]}`,revision:meta.revision,latestAmendment:meta.latestAmendment,reviewedIn:meta.reviewedIn,scope:r[8],products:r[8],applications:r[8],technicalKeywords:r[9],safetyRequirements:r[10],testingRequirements:r[11],relatedStandards:r[12],supersedes:r[13],supersededBy:r[14],officialBisUrl:bisVerifyUrl,exampleProducts:products.map((name,j)=>({name,rating:[4.6,4.4,4.5][j],reviewCount:[842,1200,326][j],isDemo:true})),isDemo:true};});
export default standards;
