// Studio Finish prompt, kept in its own file (separate from index.html's much larger
// script block) so it doesn't get lost or accidentally overwritten while iterating on
// it - this file only ever needs this one edit, nothing else in the app touches it.
//
// Loaded as a plain (non-module) script, so it works whether index.html is opened
// directly (file://) or served over http - unlike an ES module `import`, which
// browsers block under file://.
// window.STUDIO_FINISH_INSTRUCTION = 'A crisp full-body studio portrait. Soft, diffused studio lighting creates subtle dimensional modeling on the model face and clothing. Subject is positioned on a clean, seamless off-white studio backdrop. Maintain exact identity, pose, smile, tattoos, and outfit from the original image.';

// window.STUDIO_FINISH_INSTRUCTION = 'A professional high-fashion studio portrait. Focused, high-contrast directional lighting highlights the model face and clothing textures. Subject is isolated on a seamless, solid off-white studio background. Preserve original subject identity, pose, smile, tattoos, and outfit.';

window.STUDIO_FINISH_INSTRUCTION = [
    "TASK: High-definition studio portrait edit from source image.",
    "SUBJECT: Preserve 1:1 facial likeness, skin tone, hair, and outfit.",
    "EXPRESSION: Keep the exact facial expression from the source - if smiling, stay smiling with the same teeth/mouth; if neutral or serious, stay neutral or serious. Never add, remove, or change the smile.",
    "POSE & ANATOMY: Full-body standing, relaxed asymmetric posture",
    "FOOTWEAR: If the shoes or feet are cut off or not visible in the source image, add a pair of (preferable all dark) shoes that suit the outfit (both shoes identical).",
    "BACKGROUND & LIGHTING: Bare warm-white (hue 57deg) uniform backdrop, soft diffused lighting, subtle floor contact shadow.",
    "COMPOSITION: Person centered, filling 75% of frame height.",
    "QUALITY: Sharp focus, realistic skin grain, crisp fabric texture."
  ].join(" ");

// Appended to the instruction above when the "Toggle gender" checkbox is on.
// window.STUDIO_FINISH_SWAP_GENDER_INSTRUCTION = "Additionally, change the model's gender presentation to the opposite of what's shown (male ↔ female) - adjust hair, body shape, and facial features accordingly, keeping pose, framing, and background treatment. Remove purses. Adapt female outfit to male equivalents.";


// window.STUDIO_FINISH_INSTRUCTION = 'Give this a clean studio finish. This requires a full recrop/recomposition of the shot. A high-definition studio portrait of the subject in the center of the image. Re-render blurred or pixelated areas with sharp focus, realistic skin texture, and crisp fabric details. Soft, even, diffused studio lighting with a neutral-to-slightly-warm white balance - fully correct and remove any blue, cyan, teal or cool colour cast from the original photo. Background: a seamless studio backdrop that is a warm near-white, approximately #F5F2EC (a barely-there warm cream). It must NOT be blue, cool, grey, or have any cold tint - no colour cast at all beyond that faint warmth. Render it identically every time: flat, clean and uniform edge to edge, filling the frame, with at most an extremely subtle soft gradient. The only shadow is a soft, subtle, diffuse contact shadow directly beneath the model\'s feet. Keep the exact head shape and facial proportions, eye shape and spacing, nose, lips, jawline, eyebrows, hairline, skin tone, and any freckles, moles, or natural asymmetry. If the face is small, soft, or low-resolution, only sharpen and add fine detail while keeping the same likeness — never invent or alter features. Keep both eyes level, ears natural, and hands anatomically correct with five fingers each. No warping, melting, or distortion anywhere on the face or body. Preserve the subject\'s face expression, hair, tattoos, and outfit from the original image. Model must be standing, full-body, in a natural, confident, relaxed pose with realistic body proportions and a slim silhouette (do not distort or stretch the body to achieve this). Avoid a stiff, symmetric pose with both arms hanging straight down flat against the sides - give the arms a relaxed, natural bend, or a hand resting in a pocket or on the hip, with the weight shifted slightly onto one leg. Both shoes must be identical. Remove any object from the background. Crop and reframe the image so the person\'s full body (head to feet) fills approximately 75% of the new frame\'s height.';


// window.STUDIO_FINISH_INSTRUCTION = 'Upscale image to improve face and clothes details. Give this a clean studio finish. Remove floor if present. If pose looks awkward, unnatural or subject is laying against something, adjust it to more natural and confident. Improve the lighting so it is soft, even, but not flat. Replace the entire background and floor with a subtle, seamless, solid off-white studio backdrop (hex #f1f0eb), the backdrop must be clean and evenly colored corner to corner, with no leftover elements from the original background. Keep lights and shadows to avoid a too mutedi mage. This is a full-bleed studio photo, not a framed print, so the backdrop color must extend edge-to-edge with zero margin or inset of any kind. Remove any text, watermarks, logos, or other typography that appears outside the person\'s silhouette (leave any text that is printed on the clothing itself untouched). Keep outfit, colors, or identity of the person. Respect model face, skin color, hair, tattos. If subject is smiling then keep that';
