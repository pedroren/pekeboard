function outer_outline_extrude_10_7_outline_fn(){
    return new CSG.Path2D([[87,-128.5],[87,-73.5]]).appendArc([91.5,-69],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([98.425,-69]).appendArc([100.425,-67],{"radius":2,"clockwise":false,"large":false}).appendPoint([100.425,-51.775]).appendArc([104.925,-47.275],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([154.075,-47.275]).appendArc([158.575,-51.775],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([158.575,-67]).appendArc([160.575,-69],{"radius":2,"clockwise":false,"large":false}).appendPoint([165.5,-69]).appendArc([170,-73.5],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([170,-128.5]).appendArc([169,-131.3284271],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([169,-132.4215729]).appendArc([170,-135.25],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([170,-152.25]).appendArc([165.5,-156.75],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([163.9925824,-156.75]).appendPoint([160.6075475,-165.212587]).appendArc([160.5,-165.7703297],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([160.5,-176]).appendArc([156,-180.5],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([101,-180.5]).appendArc([96.5,-176],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([96.5,-165.7703297]).appendArc([96.392715,-165.2132437],{"radius":1.5,"clockwise":false,"large":false}).appendPoint([93.0074176,-156.75]).appendPoint([91.5,-156.75]).appendArc([87,-152.25],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([87,-135.25]).appendArc([88,-132.4215729],{"radius":4.5,"clockwise":true,"large":false}).appendPoint([88,-131.3284271]).appendArc([87,-128.5],{"radius":4.5,"clockwise":true,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 10.7] });
}


function base_outline_extrude_10_7_outline_fn(){
    return new CSG.Path2D([[89.5,-128.5],[89.5,-73.5]]).appendArc([91.5,-71.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([103.3840993,-71.5]).appendArc([102.925,-70.225],{"radius":2,"clockwise":true,"large":false}).appendPoint([102.925,-51.775]).appendArc([104.925,-49.775],{"radius":2,"clockwise":true,"large":false}).appendPoint([154.075,-49.775]).appendArc([156.075,-51.775],{"radius":2,"clockwise":true,"large":false}).appendPoint([156.075,-70.225]).appendArc([155.6159007,-71.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.5,-71.5]).appendArc([167.5,-73.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.5,-128.5]).appendArc([166.5,-130.2320508],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.5,-133.5179492]).appendArc([167.5,-135.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.5,-152.25]).appendArc([165.5,-154.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.3,-154.25]).appendPoint([158.2860932,-164.2847669]).appendArc([158,-165.7703297],{"radius":4,"clockwise":false,"large":false}).appendPoint([158,-176]).appendArc([156,-178],{"radius":2,"clockwise":true,"large":false}).appendPoint([101,-178]).appendArc([99,-176],{"radius":2,"clockwise":true,"large":false}).appendPoint([99,-165.7703297]).appendArc([98.7139067,-164.2847669],{"radius":4,"clockwise":false,"large":false}).appendPoint([94.7,-154.25]).appendPoint([91.5,-154.25]).appendArc([89.5,-152.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.5,-135.25]).appendArc([90.5,-133.5179492],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.5,-130.2320508]).appendArc([89.5,-128.5],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[147.5,-153.25],"radius":1.5})
.union(
    CAG.circle({"center":[109.5,-153.25],"radius":1.5})
).union(
    CAG.circle({"center":[147.5,-91.5],"radius":1.5})
).union(
    CAG.circle({"center":[109.5,-91.5],"radius":1.5})
)).extrude({ offset: [0, 0, 10.7] });
}


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


function mounting_holes_extrude_9_1_outline_fn(){
    return CAG.circle({"center":[147.5,-153.25],"radius":2.5})
.union(
    CAG.circle({"center":[109.5,-153.25],"radius":2.5})
).union(
    CAG.circle({"center":[147.5,-91.5],"radius":2.5})
).union(
    CAG.circle({"center":[109.5,-91.5],"radius":2.5})
).extrude({ offset: [0, 0, 9.1] });
}


function pcb_support_extrude_4_6_outline_fn(){
    return CAG.circle({"center":[147.5,-153.25],"radius":3.5})
.union(
    CAG.circle({"center":[109.5,-153.25],"radius":3.5})
).union(
    CAG.circle({"center":[147.5,-91.5],"radius":3.5})
).union(
    CAG.circle({"center":[109.5,-91.5],"radius":3.5})
).extrude({ offset: [0, 0, 4.6] });
}


function screw_holes_extrude_10_7_outline_fn(){
    return CAG.circle({"center":[147.5,-153.25],"radius":1.5})
.union(
    CAG.circle({"center":[109.5,-153.25],"radius":1.5})
).union(
    CAG.circle({"center":[147.5,-91.5],"radius":1.5})
).union(
    CAG.circle({"center":[109.5,-91.5],"radius":1.5})
).extrude({ offset: [0, 0, 10.7] });
}




                function _wall_case_fn() {
                    

                // creating part 0 of case _wall
                let _wall__part_0 = outer_outline_extrude_10_7_outline_fn();

                // make sure that rotations are relative
                let _wall__part_0_bounds = _wall__part_0.getBounds();
                let _wall__part_0_x = _wall__part_0_bounds[0].x + (_wall__part_0_bounds[1].x - _wall__part_0_bounds[0].x) / 2
                let _wall__part_0_y = _wall__part_0_bounds[0].y + (_wall__part_0_bounds[1].y - _wall__part_0_bounds[0].y) / 2
                _wall__part_0 = translate([-_wall__part_0_x, -_wall__part_0_y, 0], _wall__part_0);
                _wall__part_0 = rotate([0,0,0], _wall__part_0);
                _wall__part_0 = translate([_wall__part_0_x, _wall__part_0_y, 0], _wall__part_0);

                _wall__part_0 = translate([0,0,0], _wall__part_0);
                let result = _wall__part_0;
                
            

                // creating part 1 of case _wall
                let _wall__part_1 = base_outline_extrude_10_7_outline_fn();

                // make sure that rotations are relative
                let _wall__part_1_bounds = _wall__part_1.getBounds();
                let _wall__part_1_x = _wall__part_1_bounds[0].x + (_wall__part_1_bounds[1].x - _wall__part_1_bounds[0].x) / 2
                let _wall__part_1_y = _wall__part_1_bounds[0].y + (_wall__part_1_bounds[1].y - _wall__part_1_bounds[0].y) / 2
                _wall__part_1 = translate([-_wall__part_1_x, -_wall__part_1_y, 0], _wall__part_1);
                _wall__part_1 = rotate([0,0,0], _wall__part_1);
                _wall__part_1 = translate([_wall__part_1_x, _wall__part_1_y, 0], _wall__part_1);

                _wall__part_1 = translate([0,0,0], _wall__part_1);
                result = result.subtract(_wall__part_1);
                
            
                    return result;
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
            
            

                function _standoffs_case_fn() {
                    

                // creating part 0 of case _standoffs
                let _standoffs__part_0 = mounting_holes_extrude_9_1_outline_fn();

                // make sure that rotations are relative
                let _standoffs__part_0_bounds = _standoffs__part_0.getBounds();
                let _standoffs__part_0_x = _standoffs__part_0_bounds[0].x + (_standoffs__part_0_bounds[1].x - _standoffs__part_0_bounds[0].x) / 2
                let _standoffs__part_0_y = _standoffs__part_0_bounds[0].y + (_standoffs__part_0_bounds[1].y - _standoffs__part_0_bounds[0].y) / 2
                _standoffs__part_0 = translate([-_standoffs__part_0_x, -_standoffs__part_0_y, 0], _standoffs__part_0);
                _standoffs__part_0 = rotate([0,0,0], _standoffs__part_0);
                _standoffs__part_0 = translate([_standoffs__part_0_x, _standoffs__part_0_y, 0], _standoffs__part_0);

                _standoffs__part_0 = translate([0,0,0], _standoffs__part_0);
                let result = _standoffs__part_0;
                
            
                    return result;
                }
            
            

                function _pcb_support_case_fn() {
                    

                // creating part 0 of case _pcb_support
                let _pcb_support__part_0 = pcb_support_extrude_4_6_outline_fn();

                // make sure that rotations are relative
                let _pcb_support__part_0_bounds = _pcb_support__part_0.getBounds();
                let _pcb_support__part_0_x = _pcb_support__part_0_bounds[0].x + (_pcb_support__part_0_bounds[1].x - _pcb_support__part_0_bounds[0].x) / 2
                let _pcb_support__part_0_y = _pcb_support__part_0_bounds[0].y + (_pcb_support__part_0_bounds[1].y - _pcb_support__part_0_bounds[0].y) / 2
                _pcb_support__part_0 = translate([-_pcb_support__part_0_x, -_pcb_support__part_0_y, 0], _pcb_support__part_0);
                _pcb_support__part_0 = rotate([0,0,0], _pcb_support__part_0);
                _pcb_support__part_0 = translate([_pcb_support__part_0_x, _pcb_support__part_0_y, 0], _pcb_support__part_0);

                _pcb_support__part_0 = translate([0,0,0], _pcb_support__part_0);
                let result = _pcb_support__part_0;
                
            
                    return result;
                }
            
            

                function _holes_case_fn() {
                    

                // creating part 0 of case _holes
                let _holes__part_0 = screw_holes_extrude_10_7_outline_fn();

                // make sure that rotations are relative
                let _holes__part_0_bounds = _holes__part_0.getBounds();
                let _holes__part_0_x = _holes__part_0_bounds[0].x + (_holes__part_0_bounds[1].x - _holes__part_0_bounds[0].x) / 2
                let _holes__part_0_y = _holes__part_0_bounds[0].y + (_holes__part_0_bounds[1].y - _holes__part_0_bounds[0].y) / 2
                _holes__part_0 = translate([-_holes__part_0_x, -_holes__part_0_y, 0], _holes__part_0);
                _holes__part_0 = rotate([0,0,0], _holes__part_0);
                _holes__part_0 = translate([_holes__part_0_x, _holes__part_0_y, 0], _holes__part_0);

                _holes__part_0 = translate([0,0,0], _holes__part_0);
                let result = _holes__part_0;
                
            
                    return result;
                }
            
            

                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = _wall_case_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            

                // creating part 1 of case case
                let case__part_1 = bottom_plate_case_fn();

                // make sure that rotations are relative
                let case__part_1_bounds = case__part_1.getBounds();
                let case__part_1_x = case__part_1_bounds[0].x + (case__part_1_bounds[1].x - case__part_1_bounds[0].x) / 2
                let case__part_1_y = case__part_1_bounds[0].y + (case__part_1_bounds[1].y - case__part_1_bounds[0].y) / 2
                case__part_1 = translate([-case__part_1_x, -case__part_1_y, 0], case__part_1);
                case__part_1 = rotate([0,0,0], case__part_1);
                case__part_1 = translate([case__part_1_x, case__part_1_y, 0], case__part_1);

                case__part_1 = translate([0,0,0], case__part_1);
                result = result.union(case__part_1);
                
            

                // creating part 2 of case case
                let case__part_2 = _standoffs_case_fn();

                // make sure that rotations are relative
                let case__part_2_bounds = case__part_2.getBounds();
                let case__part_2_x = case__part_2_bounds[0].x + (case__part_2_bounds[1].x - case__part_2_bounds[0].x) / 2
                let case__part_2_y = case__part_2_bounds[0].y + (case__part_2_bounds[1].y - case__part_2_bounds[0].y) / 2
                case__part_2 = translate([-case__part_2_x, -case__part_2_y, 0], case__part_2);
                case__part_2 = rotate([0,0,0], case__part_2);
                case__part_2 = translate([case__part_2_x, case__part_2_y, 0], case__part_2);

                case__part_2 = translate([0,0,0], case__part_2);
                result = result.union(case__part_2);
                
            

                // creating part 3 of case case
                let case__part_3 = _pcb_support_case_fn();

                // make sure that rotations are relative
                let case__part_3_bounds = case__part_3.getBounds();
                let case__part_3_x = case__part_3_bounds[0].x + (case__part_3_bounds[1].x - case__part_3_bounds[0].x) / 2
                let case__part_3_y = case__part_3_bounds[0].y + (case__part_3_bounds[1].y - case__part_3_bounds[0].y) / 2
                case__part_3 = translate([-case__part_3_x, -case__part_3_y, 0], case__part_3);
                case__part_3 = rotate([0,0,0], case__part_3);
                case__part_3 = translate([case__part_3_x, case__part_3_y, 0], case__part_3);

                case__part_3 = translate([0,0,0], case__part_3);
                result = result.union(case__part_3);
                
            

                // creating part 4 of case case
                let case__part_4 = _holes_case_fn();

                // make sure that rotations are relative
                let case__part_4_bounds = case__part_4.getBounds();
                let case__part_4_x = case__part_4_bounds[0].x + (case__part_4_bounds[1].x - case__part_4_bounds[0].x) / 2
                let case__part_4_y = case__part_4_bounds[0].y + (case__part_4_bounds[1].y - case__part_4_bounds[0].y) / 2
                case__part_4 = translate([-case__part_4_x, -case__part_4_y, 0], case__part_4);
                case__part_4 = rotate([0,0,0], case__part_4);
                case__part_4 = translate([case__part_4_x, case__part_4_y, 0], case__part_4);

                case__part_4 = translate([0,0,0], case__part_4);
                result = result.subtract(case__part_4);
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        