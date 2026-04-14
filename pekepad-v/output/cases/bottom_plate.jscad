function base_outline_extrude_1_5_outline_fn(){
    return new CSG.Path2D([[89.5,-128.5],[89.5,-73.5]]).appendArc([91.5,-71.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.3840993,-71.5]).appendArc([102.925,-70.225],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.925,-51.775]).appendArc([104.925,-49.775],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.075,-49.775]).appendArc([156.075,-51.775],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.075,-70.225]).appendArc([155.6159007,-71.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.5,-71.5]).appendArc([167.5,-73.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.5,-128.5]).appendArc([166.5,-130.2320508],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.5,-133.5179492]).appendArc([167.5,-135.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.5,-152.25]).appendArc([165.5,-154.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.3,-154.25]).appendPoint([158.2860932,-164.2847669]).appendArc([158,-165.7703297],{"radius":4,"clockwise":false,"large":false}).appendPoint([158,-176]).appendArc([156,-178],{"radius":2,"clockwise":true,"large":false}).appendPoint([101,-178]).appendArc([99,-176],{"radius":2,"clockwise":true,"large":false}).appendPoint([99,-165.7703297]).appendArc([98.7139067,-164.2847669],{"radius":4,"clockwise":false,"large":false}).appendPoint([94.7,-154.25]).appendPoint([91.5,-154.25]).appendArc([89.5,-152.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.5,-135.25]).appendArc([90.5,-133.5179492],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.5,-130.2320508]).appendArc([89.5,-128.5],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[147.5,-153.25],"radius":1.5})
.union(
    CAG.circle({"center":[109.5,-153.25],"radius":1.5})
).union(
    CAG.circle({"center":[147.5,-91.5],"radius":1.5})
).union(
    CAG.circle({"center":[109.5,-91.5],"radius":1.5})
)).extrude({ offset: [0, 0, 1.5] });
}




                function bottom_plate_case_fn() {
                    

                // creating part 0 of case bottom_plate
                let bottom_plate__part_0 = base_outline_extrude_1_5_outline_fn();

                // make sure that rotations are relative
                let bottom_plate__part_0_bounds = bottom_plate__part_0.getBounds();
                let bottom_plate__part_0_x = bottom_plate__part_0_bounds[0].x + (bottom_plate__part_0_bounds[1].x - bottom_plate__part_0_bounds[0].x) / 2
                let bottom_plate__part_0_y = bottom_plate__part_0_bounds[0].y + (bottom_plate__part_0_bounds[1].y - bottom_plate__part_0_bounds[0].y) / 2
                bottom_plate__part_0 = translate([-bottom_plate__part_0_x, -bottom_plate__part_0_y, 0], bottom_plate__part_0);
                bottom_plate__part_0 = rotate([0,0,0], bottom_plate__part_0);
                bottom_plate__part_0 = translate([bottom_plate__part_0_x, bottom_plate__part_0_y, 0], bottom_plate__part_0);

                bottom_plate__part_0 = translate([0,0,0], bottom_plate__part_0);
                let result = bottom_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_plate_case_fn();
            }

        