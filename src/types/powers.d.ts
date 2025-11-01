export interface PowerEntry {
    power: string;
}

export interface AxisEntry {
    axis: string;
}

export interface VertexEntry {
    vertex: string;
}

export interface PowersJSON {
    spheres: PowerEntry[];
    cylinders: PowerEntry[];
    axes: AxisEntry[];
    vertices: VertexEntry[];
}
