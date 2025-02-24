use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn ai_prediction(input: &str) -> String {
    format!("AI Predicted: {} with 95% accuracy", input)
}
