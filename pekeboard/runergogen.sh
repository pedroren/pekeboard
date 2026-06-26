ergogen .
mv output/pcbs/*.kicad_pcb ./pcbs/
openjscad output/cases/case.jscad -of stla -o cases/case.stl
#openjscad output/cases/pcb.jscad -of stla -o cases/pcb.stl
openjscad output/cases/switch_plate.jscad -of stla -o cases/switch_plate.stl
openjscad output/cases/sandwich_case.jscad -of stla -o cases/sandwich_case.stl
openjscad output/cases/plate_support.jscad -of stla -o cases/plate_support.stl
openjscad output/cases/top_gasket.jscad -of stla -o cases/top_gasket.stl

openjscad output/cases/case_plate_preview.jscad -of stla 
openjscad output/cases/case_pcb_preview.jscad -of stla 

cd pcbs
#java -jar freerouting-current.jar -de pepekey.dsn -do pepekey.ses -da -dct 1
