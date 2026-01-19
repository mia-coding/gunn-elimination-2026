const rules = {
    19: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    20: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    21: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    22: 'Plushie Handouts @ Senior Quad, Lunch & Elimination Sign Up is open until Sunday, 11:59 PM',
    23: 'Plushie Handouts @ Senior Quad, Lunch & Elimination Sign Up is open until Sunday, 11:59 PM',
    24: 'Elimination Sign Up is open until Sunday, 11:59 PM',
    25: 'Targets Assigned at 11:59 PM (Sign ups close)',
    26: 'GAME STARTS: To stay safe, players must hold the animal with their right hand. Spamming kill codes will result in elimination. Do not attempt to eliminate players during class or in any other prohibited areas. Refer to the rules for more information. If you do not have a target, it means you missed the deadline to sign up with your PAUSD email.',
    27: 'To stay safe, players must be holding the animal with both hands',
    28: 'Targets Change at 10 PM: To stay safe, players must be holding animal ABOVE their shoulder',
    29: 'To stay safe, players must be wearing glasses',
    30: 'To stay safe, players must have their sleeves visibly rolled up to at least mid forearm',
    31: '10 PM: Players with less than one elimination are automatically eliminated. Targets Change & On weekends, players must abide by all rules and must carry a plushie to be safe',
    1: 'On weekends, players must abide by all rules and must carry a plushie to be safe',
    2: 'To stay safe, players must be touching a vertical wall (e.g., the side of a building)',
    3: 'To stay safe, players must be VISIBLY wearing all ONE COLOR (excluding shoes) This one color CANNOT be BLACK or WHITE',
    4: 'Targets Change at 10 PM: To stay safe, players must be wearing JORTS (jean shorts). You CAN roll up regular jeans to be shorts-length (at or above knee level)',
    5: 'To stay safe, players must be wearing a wig',
    6: 'To stay safe, players must be carrying their things in something other than a backpack',
    7: '10 PM: Players with less than two eliminations are automatically eliminated. Targets Change & On weekends, players must abide by all rules and must carry a plushie to be safe',
    8: 'On weekends, players must abide by all rules. For this week, nobody is safe: there are only requirements for eliminating others',
    9: 'To eliminate others, players must be SITTING OR LAYING DOWN ON THE GROUND',
    10: 'To eliminate others, players must have at least one shoe off',
    11: 'Targets Change at 10 PM: To eliminate others, players must give their target a flower immediately after eliminating them',
    12: 'Weekend rules apply: Players must abide by all rules and must carry a plushie to be safe',
    13: 'Weekend rules apply: Players must abide by all rules and must carry a plushie to be safe',
    14: 'Weekend rules apply: Players must abide by all rules and must carry a plushie to be safe',
    15: 'Weekend rules apply: Players must abide by all rules and must carry a plushie to be safe',
    16: 'Weekend rules apply: Players must abide by all rules and must carry a plushie to be safe',
    17: 'NO ONE IS SAFE (can be tagged anytime even with the animal)',
};

export function getTodaysChallenge() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    return rules[day] || 'No challenge for today';
}
