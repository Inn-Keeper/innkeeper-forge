/** Shares the scene coordinate system so the hammer meets the workpiece. */
// Joint pivots must match globals.css: shoulder 174,246 · elbow 222,258 · wrist 267,255.
export function InnkeeperSilhouette() {
  return (
    <g strokeLinecap="round" strokeLinejoin="round">
      {/* Planted boots, knees softly bent, a leather apron anchoring the figure. */}
      <path d="M176 328 Q168 356 170 372 Q166 386 152 394 Q148 401 158 401 L190 401 Q194 396 190 388 Q186 368 196 344 Z" fill="#171719" stroke="#45403a" strokeWidth="2" />
      <path d="M200 334 Q212 352 214 372 Q216 388 222 394 Q240 396 250 401 L212 401 Q204 396 204 386 Q200 364 192 346 Z" fill="#171719" stroke="#45403a" strokeWidth="2" />
      <path d="M194 219 Q203 214 212 216 Q214 228 211 238 L195 238 Q192 228 194 219 Z" fill="#93674b" />
      <path d="M176 229 Q199 218 220 234 Q230 262 233 300 Q234 322 230 336 Q204 350 166 336 Q162 300 166 268 Q168 244 176 229 Z" fill="#29272a" stroke="#5a4b3e" strokeWidth="2" />
      <path d="M186 240 Q200 238 212 243 Q220 290 224 342 Q194 352 165 339 Q170 300 178 272 Q181 254 186 240 Z" fill="#69412c" />
      <path d="M191 248 Q186 290 183 328 M176 286 Q197 282 218 289" fill="none" stroke="#b17845" strokeWidth="2" opacity=".55" />
      {/* Profile faces the work: brow, nose, beard. */}
      <path d="M183 194 Q180 170 200 168 Q219 168 222 186 Q223 192 229 199 Q226 203 221 203 Q220 210 216 216 L201 225 Q188 216 184 206 Z" fill="#ab7b55" />
      <path d="M175 238 Q181 214 178 194 Q174 176 188 165 Q206 154 219 170 Q223 176 222 183 Q208 178 198 182 Q191 198 195 216 Q193 230 188 241 Q181 238 175 238 Z" fill="#29272a" stroke="#574b40" strokeWidth="2" />
      <path d="M186 186 Q183 208 182 225" fill="none" stroke="#574b40" strokeWidth="2" opacity=".65" />
      <path d="M195 203 Q205 210 222 205 Q221 216 213 224 Q205 232 197 229 Q190 220 195 203 Z" fill="#38302b" />
      <path d="M214 187 Q218 189 220 192 M214 199 Q219 200 222 199" fill="none" stroke="#f2b874" strokeWidth="2" />
      {/* The right hand keeps the tongs on the hot bar. */}
      <path d="M214 240 Q232 244 234 262 Q236 276 232 288 Q228 294 222 288 Q218 270 214 240 Z" fill="#534039" />
      <path d="M224 280 Q244 276 260 278 Q264 284 260 290 Q244 292 228 294 Z" fill="#534039" />
      <ellipse cx="264" cy="285" rx="7" ry="6" fill="#c08b60" />
      <path d="M264 282 L330 295 M267 289 L330 299" stroke="#93908a" strokeWidth="3" />
      {/* The left arm rests at the side, then lifts the hammer to strike. */}
      <g className="forge-hammer">
        <path d="M168 238 Q196 242 224 250 Q230 258 224 266 Q196 262 172 254 Q164 246 168 238 Z" fill="#393235" />
        <g className="forge-forearm">
          <path d="M220 250 Q244 249 262 250 Q266 255 262 260 Q244 262 222 266 Q216 258 220 250 Z" fill="#393235" />
          <g className="forge-wrist">
            <path d="M260 251 L351 283" stroke="#ad7950" strokeWidth="6" />
            <ellipse cx="267" cy="255" rx="8" ry="7" fill="#c08b60" />
            <rect x="336" y="273" width="30" height="20" rx="3" fill="#767775" stroke="#bab6a6" strokeWidth="2" />
            <path d="M338 293 H364" stroke="#ffcd87" strokeWidth="2" />
          </g>
        </g>
      </g>
    </g>
  );
}
