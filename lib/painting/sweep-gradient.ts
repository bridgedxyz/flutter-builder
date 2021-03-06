import { AlignmentGeometry, GradientTransform, Gradient } from ".";
import { double } from "../dart";
import { Color, TileMode } from "../dart-ui";

export class SweepGradient extends Gradient {
    center: AlignmentGeometry
    startAngle: double
    endAngle: double
    colors: Array<Color>
    stops: Array<double>
    tileMode: TileMode
    transform: GradientTransform

    constructor() {
        super()
    }
}