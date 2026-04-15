function switch_plate_extrude_1_6_outline_fn(){
    return new CSG.Path2D([[89.5,-128.5],[89.5,-73.5]]).appendArc([91.5,-71.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([165.5,-71.5]).appendArc([167.5,-73.5],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.5,-128.5]).appendArc([166.5,-130.2320508],{"radius":2,"clockwise":true,"large":false}).appendPoint([166.5,-133.5179492]).appendArc([167.5,-135.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([167.5,-152.25]).appendArc([165.5,-154.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([162.3,-154.25]).appendPoint([158.2860932,-164.2847669]).appendArc([158,-165.7703297],{"radius":4,"clockwise":false,"large":false}).appendPoint([158,-176]).appendArc([156,-178],{"radius":2,"clockwise":true,"large":false}).appendPoint([101,-178]).appendArc([99,-176],{"radius":2,"clockwise":true,"large":false}).appendPoint([99,-165.7703297]).appendArc([98.7139067,-164.2847669],{"radius":4,"clockwise":false,"large":false}).appendPoint([94.7,-154.25]).appendPoint([91.5,-154.25]).appendArc([89.5,-152.25],{"radius":2,"clockwise":true,"large":false}).appendPoint([89.5,-135.25]).appendArc([90.5,-133.5179492],{"radius":2,"clockwise":true,"large":false}).appendPoint([90.5,-130.2320508]).appendArc([89.5,-128.5],{"radius":2,"clockwise":true,"large":false}).close().innerToCAG()
.subtract(
    CAG.circle({"center":[147.5,-153.25],"radius":1.5})
.union(
    CAG.circle({"center":[109.5,-153.25],"radius":1.5})
).union(
    CAG.circle({"center":[147.5,-91.5],"radius":1.5})
).union(
    CAG.circle({"center":[109.5,-91.5],"radius":1.5})
).union(
    new CSG.Path2D([[150.9,-150],[163.1,-150]]).appendPoint([163.1,-137.5]).appendPoint([150.9,-137.5]).appendPoint([150.9,-150]).close().innerToCAG()
).union(
    new CSG.Path2D([[93.9,-150],[106.1,-150]]).appendPoint([106.1,-137.5]).appendPoint([93.9,-137.5]).appendPoint([93.9,-150]).close().innerToCAG()
).union(
    new CSG.Path2D([[140.5,-174.5],[154.5,-174.5]]).appendPoint([154.5,-160.5]).appendPoint([140.5,-160.5]).appendPoint([140.5,-174.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[121.5,-155.5],[135.5,-155.5]]).appendPoint([135.5,-141.5]).appendPoint([121.5,-141.5]).appendPoint([121.5,-155.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[121.5,-174.5],[135.5,-174.5]]).appendPoint([135.5,-160.5]).appendPoint([121.5,-160.5]).appendPoint([121.5,-174.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[102.5,-174.5],[116.5,-174.5]]).appendPoint([116.5,-160.5]).appendPoint([102.5,-160.5]).appendPoint([102.5,-174.5]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-89],[164,-89]]).appendPoint([164,-75]).appendPoint([150,-75]).appendPoint([150,-89]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-108],[164,-108]]).appendPoint([164,-94]).appendPoint([150,-94]).appendPoint([150,-108]).close().innerToCAG()
).union(
    new CSG.Path2D([[150,-127],[164,-127]]).appendPoint([164,-113]).appendPoint([150,-113]).appendPoint([150,-127]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-89],[145,-89]]).appendPoint([145,-75]).appendPoint([131,-75]).appendPoint([131,-89]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-108],[145,-108]]).appendPoint([145,-94]).appendPoint([131,-94]).appendPoint([131,-108]).close().innerToCAG()
).union(
    new CSG.Path2D([[131,-127],[145,-127]]).appendPoint([145,-113]).appendPoint([131,-113]).appendPoint([131,-127]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-89],[126,-89]]).appendPoint([126,-75]).appendPoint([112,-75]).appendPoint([112,-89]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-108],[126,-108]]).appendPoint([126,-94]).appendPoint([112,-94]).appendPoint([112,-108]).close().innerToCAG()
).union(
    new CSG.Path2D([[112,-127],[126,-127]]).appendPoint([126,-113]).appendPoint([112,-113]).appendPoint([112,-127]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-89],[107,-89]]).appendPoint([107,-75]).appendPoint([93,-75]).appendPoint([93,-89]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-108],[107,-108]]).appendPoint([107,-94]).appendPoint([93,-94]).appendPoint([93,-108]).close().innerToCAG()
).union(
    new CSG.Path2D([[93,-127],[107,-127]]).appendPoint([107,-113]).appendPoint([93,-113]).appendPoint([93,-127]).close().innerToCAG()
)).extrude({ offset: [0, 0, 1.6] });
}




                function switch_plate_case_fn() {
                    

                // creating part 0 of case switch_plate
                let switch_plate__part_0 = switch_plate_extrude_1_6_outline_fn();

                // make sure that rotations are relative
                let switch_plate__part_0_bounds = switch_plate__part_0.getBounds();
                let switch_plate__part_0_x = switch_plate__part_0_bounds[0].x + (switch_plate__part_0_bounds[1].x - switch_plate__part_0_bounds[0].x) / 2
                let switch_plate__part_0_y = switch_plate__part_0_bounds[0].y + (switch_plate__part_0_bounds[1].y - switch_plate__part_0_bounds[0].y) / 2
                switch_plate__part_0 = translate([-switch_plate__part_0_x, -switch_plate__part_0_y, 0], switch_plate__part_0);
                switch_plate__part_0 = rotate([0,0,0], switch_plate__part_0);
                switch_plate__part_0 = translate([switch_plate__part_0_x, switch_plate__part_0_y, 0], switch_plate__part_0);

                switch_plate__part_0 = translate([0,0,0], switch_plate__part_0);
                let result = switch_plate__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return switch_plate_case_fn();
            }

        