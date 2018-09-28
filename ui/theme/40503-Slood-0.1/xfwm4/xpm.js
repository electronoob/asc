
// G_TYPE_MAKE_FUNDAMENTAL
const G_TYPE_BOOLEAN = 5;
const G_TYPE_INT = 6;
const G_TYPE_INVALID = 0;
const G_TYPE_STRING = 16;
const NULL = null;
const TRUE = true;
const FALSE = false;

function xpm_template() {
/*
this.button_offset=1;
this.button_spacing=1;
this.full_width_title=true;
this.title_horizontal_offset=2;
this.title_vertical_offset_active=3;
this.title_vertical_offset_inactive=3;
this.title_shadow_active=false;
this.title_shadow_inactive=false;
*/

this.xpm = {};this.c = {};
    this.c.settings = [
        /* Do not change the order of the following parameters */
        ["active_text_color", NULL, G_TYPE_STRING, FALSE],
        ["inactive_text_color", NULL, G_TYPE_STRING, FALSE],
        ["active_text_shadow_color", NULL, G_TYPE_STRING, FALSE],
        ["inactive_text_shadow_color", NULL, G_TYPE_STRING, FALSE],
        ["active_border_color", NULL, G_TYPE_STRING, FALSE],
        ["inactive_border_color", NULL, G_TYPE_STRING, FALSE],
        ["active_color_1", NULL, G_TYPE_STRING, FALSE],
        ["active_hilight_1", NULL, G_TYPE_STRING, FALSE],
        ["active_shadow_1", NULL, G_TYPE_STRING, FALSE],
        ["active_mid_1", NULL, G_TYPE_STRING, FALSE],
        ["active_text_color_2", NULL, G_TYPE_STRING, FALSE],
        ["active_color_2", NULL, G_TYPE_STRING, FALSE],
        ["active_hilight_2", NULL, G_TYPE_STRING, FALSE],
        ["active_shadow_2", NULL, G_TYPE_STRING, FALSE],
        ["active_mid_2", NULL, G_TYPE_STRING, FALSE],
        ["inactive_color_1", NULL, G_TYPE_STRING, FALSE],
        ["inactive_hilight_1", NULL, G_TYPE_STRING, FALSE],
        ["inactive_shadow_1", NULL, G_TYPE_STRING, FALSE],
        ["inactive_mid_1", NULL, G_TYPE_STRING, FALSE],
        ["inactive_text_color_2", NULL, G_TYPE_STRING, FALSE],
        ["inactive_color_2", NULL, G_TYPE_STRING, FALSE],
        ["inactive_hilight_2", NULL, G_TYPE_STRING, FALSE],
        ["inactive_shadow_2", NULL, G_TYPE_STRING, FALSE],
        ["inactive_mid_2", NULL, G_TYPE_STRING, FALSE],
        /* You can change the order of the following parameters */
        ["activate_action", NULL, G_TYPE_STRING, TRUE],
        ["borderless_maximize", NULL, G_TYPE_BOOLEAN, TRUE],
        ["box_move", NULL, G_TYPE_BOOLEAN, TRUE],
        ["box_resize", NULL, G_TYPE_BOOLEAN, TRUE],
        ["button_layout", NULL, G_TYPE_STRING, TRUE],
        ["button_offset", NULL, G_TYPE_INT, TRUE],
        ["button_spacing", NULL, G_TYPE_INT, TRUE],
        ["click_to_focus", NULL, G_TYPE_BOOLEAN, TRUE],
        ["cycle_apps_only", NULL, G_TYPE_BOOLEAN, TRUE],
        ["cycle_draw_frame", NULL, G_TYPE_BOOLEAN, TRUE],
        ["cycle_hidden", NULL, G_TYPE_BOOLEAN, TRUE],
        ["cycle_minimum", NULL, G_TYPE_BOOLEAN, TRUE],
        ["cycle_preview", NULL, G_TYPE_BOOLEAN, TRUE],
        ["cycle_tabwin_mode", NULL, G_TYPE_INT, FALSE],
        ["cycle_workspaces", NULL, G_TYPE_BOOLEAN, TRUE],
        ["double_click_action", NULL, G_TYPE_STRING, TRUE],
        ["double_click_distance", NULL, G_TYPE_INT, TRUE],
        ["double_click_time", NULL, G_TYPE_INT, TRUE],
        ["easy_click", NULL, G_TYPE_STRING, TRUE],
        ["focus_delay", NULL, G_TYPE_INT, TRUE],
        ["focus_hint", NULL, G_TYPE_BOOLEAN, TRUE],
        ["focus_new", NULL, G_TYPE_BOOLEAN,TRUE],
        ["frame_opacity", NULL, G_TYPE_INT, TRUE],
        ["full_width_title", NULL, G_TYPE_BOOLEAN, TRUE],
        ["horiz_scroll_opacity", NULL, G_TYPE_BOOLEAN, FALSE],
        ["inactive_opacity", NULL, G_TYPE_INT, TRUE],
        ["margin_bottom", NULL, G_TYPE_INT, FALSE],
        ["margin_left", NULL, G_TYPE_INT, FALSE],
        ["margin_right", NULL, G_TYPE_INT, FALSE],
        ["margin_top", NULL, G_TYPE_INT, FALSE],
        ["maximized_offset", NULL, G_TYPE_INT, TRUE],
        ["mousewheel_rollup", NULL, G_TYPE_BOOLEAN, FALSE],
        ["move_opacity", NULL, G_TYPE_INT, TRUE],
        ["placement_mode", NULL, G_TYPE_STRING, TRUE],
        ["placement_ratio", NULL, G_TYPE_INT, TRUE],
        ["popup_opacity", NULL, G_TYPE_INT, TRUE],
        ["prevent_focus_stealing", NULL, G_TYPE_BOOLEAN, TRUE],
        ["raise_delay", NULL, G_TYPE_INT, TRUE],
        ["raise_on_click", NULL, G_TYPE_BOOLEAN, TRUE],
        ["raise_on_focus", NULL, G_TYPE_BOOLEAN, TRUE],
        ["raise_with_any_button", NULL, G_TYPE_BOOLEAN, TRUE],
        ["repeat_urgent_blink", NULL, G_TYPE_BOOLEAN, TRUE],
        ["resize_opacity", NULL, G_TYPE_INT, TRUE],
        ["scroll_workspaces", NULL, G_TYPE_BOOLEAN, TRUE],
        ["shadow_delta_height", NULL, G_TYPE_INT, TRUE],
        ["shadow_delta_width", NULL, G_TYPE_INT, TRUE],
        ["shadow_delta_x", NULL, G_TYPE_INT, TRUE],
        ["shadow_delta_y", NULL, G_TYPE_INT, TRUE],
        ["shadow_opacity", NULL, G_TYPE_INT, TRUE],
        ["show_app_icon", NULL, G_TYPE_BOOLEAN, TRUE],
        ["show_dock_shadow", NULL, G_TYPE_BOOLEAN, TRUE],
        ["show_frame_shadow", NULL, G_TYPE_BOOLEAN, TRUE],
        ["show_popup_shadow", NULL, G_TYPE_BOOLEAN, TRUE],
        ["snap_resist", NULL, G_TYPE_BOOLEAN, TRUE],
        ["snap_to_border", NULL, G_TYPE_BOOLEAN, TRUE],
        ["snap_to_windows", NULL, G_TYPE_BOOLEAN, TRUE],
        ["snap_width", NULL, G_TYPE_INT, TRUE],
        ["sync_to_vblank", NULL, G_TYPE_BOOLEAN, TRUE],
        ["theme", NULL, G_TYPE_STRING, TRUE],
        ["tile_on_move", NULL, G_TYPE_BOOLEAN, TRUE],
        ["title_alignment", NULL, G_TYPE_STRING, TRUE],
        ["title_font", NULL, G_TYPE_STRING, FALSE],
        ["title_horizontal_offset", NULL, G_TYPE_INT, TRUE],
        ["titleless_maximize", NULL, G_TYPE_BOOLEAN, TRUE],
        ["title_shadow_active", NULL, G_TYPE_STRING, TRUE],
        ["title_shadow_inactive", NULL, G_TYPE_STRING, TRUE],
        ["title_vertical_offset_active", NULL, G_TYPE_INT, TRUE],
        ["title_vertical_offset_inactive", NULL, G_TYPE_INT, TRUE],
        ["toggle_workspaces", NULL, G_TYPE_BOOLEAN, TRUE],
        ["unredirect_overlays", NULL, G_TYPE_BOOLEAN, TRUE],
        ["urgent_blink", NULL, G_TYPE_BOOLEAN, TRUE],
        ["use_compositing", NULL, G_TYPE_BOOLEAN, TRUE],
        ["workspace_count", NULL, G_TYPE_INT, TRUE],
        ["wrap_cycle", NULL, G_TYPE_BOOLEAN, TRUE],
        ["wrap_layout", NULL, G_TYPE_BOOLEAN, TRUE],
        ["wrap_resistance", NULL, G_TYPE_INT, TRUE],
        ["wrap_windows", NULL, G_TYPE_BOOLEAN, TRUE],
        ["wrap_workspaces", NULL, G_TYPE_BOOLEAN, TRUE],
        ["zoom_desktop", NULL, G_TYPE_BOOLEAN, TRUE],
        [NULL, NULL, G_TYPE_INVALID, FALSE]
    ];
this.xpm.bottom_active = [
"32 5 4 1",
" 	c None",
".	c #000000",
"@	c #3E566B s active_color_1",
"#	c #D5D6D5 s active_hilight_1",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",
"################################",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"];
this.xpm.bottom_inactive = [
"32 5 5 1",
" 	c None",
".	c #000000",
"@	c #3E566B s inactive_shadow_2",
"#	c #D5D6D5 s inactive_hilight_1",
"+	c #6EA0CD s inactive_mid_1",
"++++++++++++++++++++++++++++++++",
"################################",
"################################",
"################################",
"@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"];
this.xpm.bottom_left_active = [
"16 17 6 1",
"  	c None",
". 	c #000000",
"+ 	c #6EA0CD s active_hilight_1",
"@ 	c #3E566B s active_shadow_2",
"#	c #D5D6D5 s active_color_2",
"%	c #567B9C s active_color_1",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"%%%%%%%%%%%%%%%%",
"%%%%%%%%%%%%%%%%",
"%%%%%%%%%%%%%%%%",
"%+++++++++++++++",
"%%%%%%%%%%%%%%%%"];
this.xpm.bottom_left_inactive = [
"16 17 6 1",
"       c None",
".      c #000000",
"+      c #6EA0CD s active_hilight_1",
"@      c #3E566B s active_shadow_2",
"#	c #D5D6D5 s inactive_hilight_1",
"%	c #567B9C s inactive_mid_1",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@###            ",
"@%%%%%%%%%%%%%%%",
"@###############",
"@###############",
"@###############",
"@@@@@@@@@@@@@@@@"];
this.xpm.bottom_right_active = [
"16 17 6 1",
"  	c None",
". 	c #000000",
"+ 	c #6EA0CD s active_hilight_1",
"@ 	c #3E566B s active_shadow_2",
"#	c #D5D6D5 s active_color_2",
"%	c #567B9C s active_color_1",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"%%%%%%%%%%%%%%%%",
"%%%%%%%%%%%%%%%%",
"%%%%%%%%%%%%%%%%",
"+++++++++++++++%",
"%%%%%%%%%%%%%%%%"];
this.xpm.bottom_right_inactive = [
"16 17 6 1",
"       c None",
".      c #000000",
"+      c #6EA0CD s active_hilight_1",
"@      c #3E566B s active_shadow_2",
"#	c #D5D6D5 s inactive_hilight_2",
"%	c #567B9C s inactive_mid_1",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"            ###@",
"%%%%%%%%%%%%%%%@",
"###############@",
"###############@",
"###############@",
"@@@@@@@@@@@@@@@@"];
this.xpm.close_active = [
"16 18 8 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"$	c #ED2323",
"=	c #FFA0A0",
"-	c #BA1B1B s active_color_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....##..##.....",
".....######.....",
"......####......",
"......####......",
".....######.....",
".....##..##.....",
"................",
"................",
"................",
"................",
"................"];
this.xpm.close_inactive = [
"16 18 8 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"$	c #ED2323",
"=	c #FFA0A0",
"-	c #BA1B1B s active_color_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....##..##.....",
".....######.....",
"......####......",
"......####......",
".....######.....",
".....##..##.....",
"................",
"................",
"................",
"................",
"................"];
this.xpm.close_pressed = [
"16 18 8 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #B4BAB5 s active_mid_1",
"#	c #FFFFFF",
"$	c #ED2323",
"=	c #FFA0A0",
"-	c #BA1B1B",
"................",
"................",
"................",
"................",
"................",
".....#....#.....",
"....###..###....",
"...##########...",
"....########....",
".....######.....",
".....######.....",
"....########....",
"...##########...",
"....###..###....",
".....#....##....",
"................",
"................",
"................"];
this.xpm.hide_active = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
"................",
"................",
"................",
"................",
"................"];
this.xpm.hide_inactive = [
"16 18 5 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
"................",
"................",
"................",
"................",
"................"];
this.xpm.hide_pressed = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #B4BAB5 s active_mid_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"...##########...",
"...##########...",
"...##########...",
"...##########...",
"................",
"................",
"................"];
this.xpm.left_active = [
"1 32 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"#	c #D5D6D5 s active_color_2",
"%	c #567B9C s active_mid_1",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@"];
this.xpm.left_inactive = [
"1 32 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"#	c #D5D6D5 s active_color_2",
"%	c #567B9C s active_mid_1",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@"];
this.xpm.maximize_active = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
".....#....#.....",
".....#....#.....",
".....#....#.....",
".....######.....",
"................",
"................",
"................",
"................",
"................"];
this.xpm.maximize_inactive = [
"16 18 5 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
".....#....#.....",
".....#....#.....",
".....#....#.....",
".....######.....",
"................",
"................",
"................",
"................",
"................"];
this.xpm.maximize_pressed = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #B4BAB5 s active_mid_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"...##########...",
"...##########...",
"...##########...",
"...##########...",
"...##......##...",
"...##......##...",
"...##......##...",
"...##......##...",
"...##########...",
"...##########...",
"................",
"................",
"................"];
this.xpm.maximize_toggled_active = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"....######......",
"....#....#......",
"....#..######...",
"....#..#.#..#...",
"....#..#.#..#...",
"....######..#...",
".......#....#...",
".......######...",
"................",
"................",
"................",
"................"];
this.xpm.maximize_toggled_inactive = [
"16 18 5 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s inactive_hilight_1",
"@	c #4B58A2 s inactive_shadow_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"....######......",
"....#....#......",
"....#..######...",
"....#..#.#..#...",
"....#..#.#..#...",
"....######..#...",
".......#....#...",
".......######...",
"................",
"................",
"................",
"................"];
this.xpm.maximize_toggled_pressed = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"..########......",
"..########......",
"..##....##......",
"..##..########..",
"..##..########..",
"..##..#.##..##..",
"..########..##..",
"..########..##..",
"......##....##..",
"......########..",
"......########..",
"................",
"................",
"................"];
this.xpm.menu_active = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"....##....##....",
"....###..###....",
".....######.....",
"......####......",
".......##.......",
"................",
"................",
"................",
"................",
"................"];
this.xpm.menu_inactive = [
"16 18 5 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"....##....##....",
"....###..###....",
".....######.....",
"......####......",
".......##.......",
"................",
"................",
"................",
"................",
"................"];
this.xpm.menu_pressed = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"...###....###...",
"...####..####...",
"...##########...",
"....########....",
".....######.....",
"......####......",
".......##.......",
"................",
"................",
"................",
"................"];
this.xpm.right_active = [
"1 32 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"#	c #D5D6D5 s active_color_2",
"%	c #567B9C s active_mid_1",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@"];
this.xpm.right_inactive = [
"1 32 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"#	c #D5D6D5 s active_color_2",
"%	c #567B9C s active_mid_1",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@",
"@"];
this.xpm.shade_active = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................"];
this.xpm.shade_inactive = [
"16 18 5 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................"];
this.xpm.shade_pressed = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"...##########...",
"...##########...",
"...##########...",
"...##########...",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................"];
this.xpm.shade_toggled_active = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................"];
this.xpm.shade_toggled_inactive = [
"16 18 5 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
".....######.....",
".....######.....",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................"];
this.xpm.shade_toggled_pressed = [
"16 18 5 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"...##########...",
"...##########...",
"...##########...",
"...##########...",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"................"];
this.xpm.stick_active = [
"16 18 6 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #949595 s active_color_1",
"$	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"......$$$$......",
".....$$..$$.....",
".....$....$.....",
".....$....$.....",
".....$$..$$.....",
"......$$$$......",
"................",
"................",
"................",
"................",
"................"];
this.xpm.stick_inactive = [
"16 18 6 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #949595 s active_color_1",
"$	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
"................",
"......$$$$......",
".....$$..$$.....",
".....$....$.....",
".....$....$.....",
".....$$..$$.....",
"......$$$$......",
"................",
"................",
"................",
"................",
"................"];
this.xpm.stick_pressed = [
"16 18 6 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #B4BAB5 s active_mid_1",
"#	c #949595 s active_color_1",
"$	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"......$$$$......",
".....$$$$$$.....",
"....$$$$$$$$....",
"...$$$....$$$...",
"...$$$....$$$...",
"...$$$....$$$...",
"...$$$....$$$...",
"....$$$$$$$$....",
".....$$$$$$.....",
"......$$$$......",
"................",
"................",
"................"];
this.xpm.stick_toggled_active = [
"16 18 6 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #949595 s active_color_1",
"$	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"................",
".....#$$$$#.....",
"....#$$$$$$#....",
"....$$....$$....",
"....$$.$$.$$....",
"....$$.$$.$$....",
"....$$....$$....",
"....#$$$$$$#....",
".....#$$$$#.....",
"................",
"................",
"................",
"................"];
this.xpm.stick_toggled_inactive = [
"16 18 6 1",
" 	c None",
".	c #567B9C s inactive_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #4B58A2 s active_shadow_1",
"#	c #949595 s inactive_color_1",
"$	c #FFFFFF s inactive_shadow_1",
"................",
"................",
"................",
"................",
"................",
"................",
".....#$$$$#.....",
"....#$$$$$$#....",
"....$$....$$....",
"....$$.$$.$$....",
"....$$.$$.$$....",
"....$$....$$....",
"....#$$$$$$#....",
".....#$$$$#.....",
"................",
"................",
"................",
"................"];
this.xpm.stick_toggled_pressed = [
"16 18 6 1",
" 	c None",
".	c #567B9C s active_color_1",
"+	c #FFFFFF s active_hilight_1",
"@	c #B4BAB5 s active_mid_1",
"#	c #949595 s active_color_1",
"$	c #FFFFFF",
"................",
"................",
"................",
"................",
"................",
"......$$$$......",
".....$$$$$$.....",
"....$$$$$$$$....",
"...$$$....$$$...",
"...$$$.$$.$$$...",
"...$$$.$$.$$$...",
"...$$$....$$$...",
"....$$$$$$$$....",
".....$$$$$$.....",
"......$$$$......",
"................",
"................",
"................"];
this.xpm.title_1_active = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"$	c #567B9C s active_mid_1",
"#	c #4C7BA6 s active_color_1",
"##",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"++",
"##"];
this.xpm.title_1_inactive = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s inactive_hilight_1",
"@	c #3E566B s inactive_shadow_1",
"$	c #567B9C s inactive_mid_1",
"#	c #4C7BA6 s inactive_color_1",
"@@",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"$$"];
this.xpm.title_2_active = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"$	c #567B9C s active_mid_1",
"#	c #4C7BA6 s active_color_1",
"##",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"++",
"##"];
this.xpm.title_2_inactive = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s inactive_hilight_1",
"@	c #3E566B s inactive_shadow_1",
"$	c #567B9C s inactive_mid_1",
"#	c #4C7BA6 s inactive_color_1",
"@@",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"$$"];
this.xpm.title_3_active = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"$	c #567B9C s active_mid_1",
"#	c #4C7BA6 s active_color_1",
"##",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"++",
"##"];
this.xpm.title_3_inactive = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s inactive_hilight_1",
"@	c #3E566B s inactive_shadow_1",
"$	c #567B9C s inactive_mid_1",
"#	c #4C7BA6 s inactive_color_1",
"@@",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"$$"];
this.xpm.title_4_active = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"$	c #567B9C s active_mid_1",
"#	c #4C7BA6 s active_color_1",
"##",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"++",
"##"];
this.xpm.title_4_inactive = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s inactive_hilight_1",
"@	c #3E566B s inactive_shadow_1",
"$	c #567B9C s inactive_mid_1",
"#	c #4C7BA6 s inactive_color_1",
"@@",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"$$"];
this.xpm.title_5_active = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"$	c #567B9C s active_mid_1",
"#	c #4C7BA6 s active_color_1",
"##",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"++",
"##"];
this.xpm.title_5_inactive = [
"2 24 6 1",
" 	c None",
".	c #000000",
"+	c #6EA0CD s inactive_hilight_1",
"@	c #3E566B s inactive_shadow_1",
"$	c #567B9C s inactive_mid_1",
"#	c #4C7BA6 s inactive_color_1",
"@@",
"++",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"##",
"$$"];
this.xpm.top_left_active = [
"8 24 6 1",
"       c None",
".      c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"#	c #567B9C s active_color_1",
"$	c #4C7BA6 s active_color_1",
"########",
"#+++++++",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+######",
"#+++++++",
"########"];
this.xpm.top_left_inactive = [
"8 24 6 1",
"       c None",
".      c #000000",
"+	c #6EA0CD s inactive_mid_1",
"@	c #3E566B s inactive_shadow_1",
"#	c #567B9C s inactive_color_1",
"$	c #4C7BA6 s inactive_hilight_1",
"@@@@@@@@",
"@$$$$$$$",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@$######",
"@+++++++"];
this.xpm.top_right_active = [
"8 24 6 1",
"       c None",
".      c #000000",
"+	c #6EA0CD s active_hilight_1",
"@	c #3E566B s active_shadow_2",
"#	c #567B9C s active_color_1",
"$	c #4C7BA6 s active_color_1",
"########",
"+++++++#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"######+#",
"+++++++#",
"########"];
this.xpm.top_right_inactive = [
"8 24 6 1",
"       c None",
".      c #000000",
"+	c #6EA0CD s inactive_mid_1",
"@	c #3E566B s inactive_shadow_1",
"#	c #567B9C s inactive_color_1",
"$	c #4C7BA6 s inactive_hilight_1",
"@@@@@@@@",
"$$$$$$$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"######$@",
"+++++++@"];
}

var theme = new xpm_template();

Object.keys(theme.xpm).forEach(function (element){
        let xpm = get_xpm_data(element);
        let ctable = get_xpm_colortable(xpm.ctable, 1);
        console.log(element, xpm.width, xpm.height, xpm.colors, xpm.cpp);
});

// returns width, height obj
function get_xpm_data(data) {
  let row = theme.xpm[data][0].split(" ");
  let width = parseInt(row[0]);
  let height = parseInt(row[1]);
  let colors = parseInt(row[2]);
  let cpp = parseInt(row[3])
  let ctable = theme.xpm[data].slice(1,colors+1);
  let pixels = theme.xpm[data].slice(colors+1);
  return {width: width, height: height, colors: colors, cpp: cpp, ctable: ctable, pixels:pixels};
}

function get_xpm_colortable(ctable, cpp) {
    let generated_table = [];
    let i = 0;
    for(i=0;i<ctable.length;i++) {
      //assumes 1cpp
      let entry = ctable[i];
      let symbol = entry[0];
      //let color_block = tabs[1];
      //color_block = color_block.split(" ");
      let color_block = entry.substr(1).match(/\w+/gm);
      let k = 0;
      for(k=0;k<color_block.length;k+=2) {
        /*only interested in the c color stuff atm*/
          if (color_block[k] == "c") {
            generated_table[symbol] = color_block[k+1];
          }
      }
    }
      return {length: i, table: generated_table};
  }





/*
List of decoration part names.

| menu-active         | menu-inactive         | menu-prelight     | menu-pressed     |                         |                           |                           |                          |
| shade-active        | shade-inactive        | shade-prelight    | shade-pressed    | shade-toggled-active    | shade-toggled-inactive    | shade-toggled-prelight    | shade-toggled-pressed    |
| stick-active        | stick-inactive        | stick-prelight    | stick-pressed    | stick-toggled-active    | stick-toggled-inactive    | stick-toggled-prelight    | stick-toggled-pressed    |
| hide-active         | hide-inactive         | hide-prelight     | hide-pressed     |                         |                           |                           |                          |
| maximize-active     | maximize-inactive     | maximize-prelight | maximize-pressed | maximize-toggled-active | maximize-toggled-inactive | maximize-toggled-prelight | maximize-toggled-pressed |
| close-active        | close-inactive        | close-prelight    | close-pressed    |                         |                           |                           |                          |
| top-left-active     | top-left-inactive     |                   |                  |                         |                           |                           |                          |
| title-1-active      | title-1-inactive      |                   |                  |                         |                           |                           |                          |
| title-2-active      | title-2-inactive      |                   |                  |                         |                           |                           |                          |
| title-3-active      | title-3-inactive      |                   |                  |                         |                           |                           |                          |
| title-4-active      | title-4-inactive      |                   |                  |                         |                           |                           |                          |
| title-5-active      | title-5-inactive      |                   |                  |                         |                           |                           |                          |
| top-right-active    | top-right-inactive    |                   |                  |                         |                           |                           |                          |
| right-active        | right-inactive        |                   |                  |                         |                           |                           |                          |
| bottom-right-active | bottom-right-inactive |                   |                  |                         |                           |                           |                          |
| bottom-active       | bottom-inactive       |                   |                  |                         |                           |                           |                          |
| bottom-left-active  | bottom-left-inactive  |                   |                  |                         |                           |                           |                          |
| left-active         | left-inactive         |                   |                  |                         |                           |                           |                          |
*/

