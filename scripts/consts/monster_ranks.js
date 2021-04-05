export const MONSTER_RANKS = {
    minion: {
        armor_class: -2,
        hit_points: 0.2,
        attack_bonus: -2,
        damage_per_action: 0.75,
        saving_throws: -2,
        attack_dcs: -2,
        xp: 0.0625,
        scale_with_players: false,
        target_players: 0.25,
        has_phases: false,
        phases: {
            current: 1,
            maximum: 1
        }
    },
    standard: {
        armor_class: 0,
        hit_points: 1,
        attack_bonus: 0,
        damage_per_action: 1,
        saving_throws: 0,
        attack_dcs: 0,
        xp: 0.25,
        scale_with_players: false,
        target_players: 1,
        has_phases: false,
        phases: {
            current: 1,
            maximum: 1
        }
    },
    elite: {
        armor_class: 2,
        hit_points: 2,
        attack_bonus: 2,
        damage_per_action: 1.1,
        saving_throws: 2,
        attack_dcs: 2,
        xp: 0.5,
        scale_with_players: false,
        target_players: 2,
        has_phases: false,
        phases: {
            current: 1,
            maximum: 1
        }
    },
    solo: {
        armor_class: 2,
        hit_points: 1,
        attack_bonus: 2,
        damage_per_action: 1.2,
        saving_throws: 2,
        attack_dcs: 2,
        xp: 1,
        scale_with_players: true,
        target_players: 4,
        has_phases: true,
        phases: {
            current: 1,
            maximum: 1
        }
    },
    custom: {
        armor_class: 0,
        hit_points: 1,
        attack_bonus: 0,
        damage_per_action: 1,
        saving_throws: 0,
        attack_dcs: 0,
        xp: 1,
        scale_with_players: false,
        target_players: 1,
        has_phases: false,
        phases: {
            current: 1,
            maximum: 1
        }
    }
};