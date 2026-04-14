ergogen .
mv output/pcbs/*.kicad_pcb ./pcbs/
openjscad output/cases/case.jscad -of stla -o cases/case.stl
#openjscad output/cases/pcb.jscad -of stla -o cases/pcb.stl
openjscad output/cases/switch_plate.jscad -of stla -o cases/switch_plate.stl
openjscad output/cases/sandwich_case.jscad -of stla -o cases/sandwich_case.stl

#openjscad output/cases/case_plate_preview.jscad -of stla 
#openjscad output/cases/case_pcb_preview.jscad -of stla 
