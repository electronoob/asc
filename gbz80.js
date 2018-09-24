'use strict';
/*jshint -W084 */
var fs = require('fs');
var filename = 'source.asc';
var data = fs.readFileSync(filename);
var asc = data.toString().split('\n');
var asc_clean = asc.map(function(s) {
    if (s) {
        return (s.trim());
    }
    return ('!');
});
asc = asc_clean;
delete asc_clean.obj;
delete data.obj;

/* object literal */
var optbl = 
{
    "NOP":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x0"},
    "LD BC,d16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x1"},
    "LD (BC),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x2"},
    "INC BC":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x3"},
    "INC B":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x4"},
    "DEC B":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x5"},
    "LD B,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x6"},
    "RLCA":{"flagZ":"0","flagN":"0","flagH":"0","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x7"},
    "LD (a16),SP":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":20,"cyclesNotTaken":20,"CB":0,"opcode":"0x8"},
    "ADD HL,BC":{"flagZ":"-","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x9"},
    "LD A,(BC)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xA"},
    "DEC BC":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xB"},
    "INC C":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xC"},
    "DEC C":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xD"},
    "LD C,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xE"},
    "RRCA":{"flagZ":"0","flagN":"0","flagH":"0","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xF"},
    "STOP 0":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x10"},
    "LD DE,d16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x11"},
    "LD (DE),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x12"},
    "INC DE":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x13"},
    "INC D":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x14"},
    "DEC D":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x15"},
    "LD D,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x16"},
    "RLA":{"flagZ":"0","flagN":"0","flagH":"0","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x17"},
    "JR r8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x18"},
    "ADD HL,DE":{"flagZ":"-","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x19"},
    "LD A,(DE)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x1A"},
    "DEC DE":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x1B"},
    "INC E":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x1C"},
    "DEC E":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x1D"},
    "LD E,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x1E"},
    "RRA":{"flagZ":"0","flagN":"0","flagH":"0","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x1F"},
    "JR NZ,r8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":8,"CB":0,"opcode":"0x20"},
    "LD HL,d16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x21"},
    "LD (HL+),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x22"},
    "INC HL":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x23"},
    "INC H":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x24"},
    "DEC H":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x25"},
    "LD H,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x26"},
    "DAA":{"flagZ":"Z","flagN":"-","flagH":"0","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x27"},
    "JR Z,r8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":8,"CB":0,"opcode":"0x28"},
    "ADD HL,HL":{"flagZ":"-","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x29"},
    "LD A,(HL+)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x2A"},
    "DEC HL":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x2B"},
    "INC L":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x2C"},
    "DEC L":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x2D"},
    "LD L,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x2E"},
    "CPL":{"flagZ":"-","flagN":"1","flagH":"1","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x2F"},
    "JR NC,r8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":8,"CB":0,"opcode":"0x30"},
    "LD SP,d16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x31"},
    "LD (HL-),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x32"},
    "INC SP":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x33"},
    "INC (HL)":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x34"},
    "DEC (HL)":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x35"},
    "LD (HL),d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0x36"},
    "SCF":{"flagZ":"-","flagN":"0","flagH":"0","flagC":"1","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x37"},
    "JR C,r8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":8,"CB":0,"opcode":"0x38"},
    "ADD HL,SP":{"flagZ":"-","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x39"},
    "LD A,(HL-)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x3A"},
    "DEC SP":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x3B"},
    "INC A":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x3C"},
    "DEC A":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x3D"},
    "LD A,d8":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x3E"},
    "CCF":{"flagZ":"-","flagN":"0","flagH":"0","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x3F"},
    "LD B,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x40"},
    "LD B,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x41"},
    "LD B,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x42"},
    "LD B,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x43"},
    "LD B,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x44"},
    "LD B,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x45"},
    "LD B,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x46"},
    "LD B,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x47"},
    "LD C,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x48"},
    "LD C,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x49"},
    "LD C,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x4A"},
    "LD C,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x4B"},
    "LD C,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x4C"},
    "LD C,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x4D"},
    "LD C,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x4E"},
    "LD C,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x4F"},
    "LD D,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x50"},
    "LD D,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x51"},
    "LD D,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x52"},
    "LD D,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x53"},
    "LD D,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x54"},
    "LD D,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x55"},
    "LD D,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x56"},
    "LD D,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x57"},
    "LD E,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x58"},
    "LD E,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x59"},
    "LD E,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x5A"},
    "LD E,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x5B"},
    "LD E,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x5C"},
    "LD E,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x5D"},
    "LD E,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x5E"},
    "LD E,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x5F"},
    "LD H,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x60"},
    "LD H,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x61"},
    "LD H,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x62"},
    "LD H,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x63"},
    "LD H,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x64"},
    "LD H,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x65"},
    "LD H,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x66"},
    "LD H,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x67"},
    "LD L,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x68"},
    "LD L,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x69"},
    "LD L,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x6A"},
    "LD L,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x6B"},
    "LD L,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x6C"},
    "LD L,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x6D"},
    "LD L,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x6E"},
    "LD L,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x6F"},
    "LD (HL),B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x70"},
    "LD (HL),C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x71"},
    "LD (HL),D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x72"},
    "LD (HL),E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x73"},
    "LD (HL),H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x74"},
    "LD (HL),L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x75"},
    "HALT":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x76"},
    "LD (HL),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x77"},
    "LD A,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x78"},
    "LD A,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x79"},
    "LD A,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x7A"},
    "LD A,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x7B"},
    "LD A,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x7C"},
    "LD A,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x7D"},
    "LD A,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x7E"},
    "LD A,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x7F"},
    "ADD A,B":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x80"},
    "ADD A,C":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x81"},
    "ADD A,D":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x82"},
    "ADD A,E":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x83"},
    "ADD A,H":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x84"},
    "ADD A,L":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x85"},
    "ADD A,(HL)":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x86"},
    "ADD A,A":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x87"},
    "ADC A,B":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x88"},
    "ADC A,C":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x89"},
    "ADC A,D":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x8A"},
    "ADC A,E":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x8B"},
    "ADC A,H":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x8C"},
    "ADC A,L":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x8D"},
    "ADC A,(HL)":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x8E"},
    "ADC A,A":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x8F"},
    "SUB B":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x90"},
    "SUB C":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x91"},
    "SUB D":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x92"},
    "SUB E":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x93"},
    "SUB H":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x94"},
    "SUB L":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x95"},
    "SUB (HL)":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x96"},
    "SUB A":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x97"},
    "SBC A,B":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x98"},
    "SBC A,C":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x99"},
    "SBC A,D":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x9A"},
    "SBC A,E":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x9B"},
    "SBC A,H":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x9C"},
    "SBC A,L":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x9D"},
    "SBC A,(HL)":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0x9E"},
    "SBC A,A":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0x9F"},
    "AND B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA0"},
    "AND C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA1"},
    "AND D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA2"},
    "AND E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA3"},
    "AND H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA4"},
    "AND L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA5"},
    "AND (HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xA6"},
    "AND A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA7"},
    "XOR B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA8"},
    "XOR C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xA9"},
    "XOR D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xAA"},
    "XOR E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xAB"},
    "XOR H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xAC"},
    "XOR L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xAD"},
    "XOR (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xAE"},
    "XOR A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xAF"},
    "OR B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB0"},
    "OR C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB1"},
    "OR D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB2"},
    "OR E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB3"},
    "OR H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB4"},
    "OR L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB5"},
    "OR (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xB6"},
    "OR A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB7"},
    "CP B":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB8"},
    "CP C":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xB9"},
    "CP D":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xBA"},
    "CP E":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xBB"},
    "CP H":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xBC"},
    "CP L":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xBD"},
    "CP (HL)":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xBE"},
    "CP A":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xBF"},
    "RET NZ":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":20,"cyclesNotTaken":8,"CB":0,"opcode":"0xC0"},
    "POP BC":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xC1"},
    "JP NZ,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":12,"CB":0,"opcode":"0xC2"},
    "JP a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xC3"},
    "CALL NZ,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":24,"cyclesNotTaken":12,"CB":0,"opcode":"0xC4"},
    "PUSH BC":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xC5"},
    "ADD A,d8":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xC6"},
    "RST 00H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xC7"},
    "RET Z":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":20,"cyclesNotTaken":8,"CB":0,"opcode":"0xC8"},
    "RET":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xC9"},
    "JP Z,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":12,"CB":0,"opcode":"0xCA"},
    "PREFIX CB":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xCB"},
    "CALL Z,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":24,"cyclesNotTaken":12,"CB":0,"opcode":"0xCC"},
    "CALL a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":24,"cyclesNotTaken":24,"CB":0,"opcode":"0xCD"},
    "ADC A,d8":{"flagZ":"Z","flagN":"0","flagH":"H","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xCE"},
    "RST 08H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xCF"},
    "RET NC":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":20,"cyclesNotTaken":8,"CB":0,"opcode":"0xD0"},
    "POP DE":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xD1"},
    "JP NC,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":12,"CB":0,"opcode":"0xD2"},
    "CALL NC,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":24,"cyclesNotTaken":12,"CB":0,"opcode":"0xD4"},
    "PUSH DE":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xD5"},
    "SUB d8":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xD6"},
    "RST 10H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xD7"},
    "RET C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":20,"cyclesNotTaken":8,"CB":0,"opcode":"0xD8"},
    "RETI":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xD9"},
    "JP C,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":12,"CB":0,"opcode":"0xDA"},
    "CALL C,a16":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":24,"cyclesNotTaken":12,"CB":0,"opcode":"0xDC"},
    "SBC A,d8":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xDE"},
    "RST 18H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xDF"},
    "LDH (a8),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xE0"},
    "POP HL":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xE1"},
    "LD (C),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xE2"},
    "PUSH HL":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xE5"},
    "AND d8":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xE6"},
    "RST 20H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xE7"},
    "ADD SP,r8":{"flagZ":"0","flagN":"0","flagH":"H","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xE8"},
    "JP (HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xE9"},
    "LD (a16),A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xEA"},
    "XOR d8":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xEE"},
    "RST 28H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xEF"},
    "LDH A,(a8)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xF0"},
    "POP AF":{"flagZ":"Z","flagN":"N","flagH":"H","flagC":"C","len":1,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xF1"},
    "LD A,(C)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xF2"},
    "DI":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xF3"},
    "PUSH AF":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xF5"},
    "OR d8":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xF6"},
    "RST 30H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xF7"},
    "LD HL,SP+r8":{"flagZ":"0","flagN":"0","flagH":"H","flagC":"C","len":2,"cyclesTaken":12,"cyclesNotTaken":12,"CB":0,"opcode":"0xF8"},
    "LD SP,HL":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xF9"},
    "LD A,(a16)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":3,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xFA"},
    "EI":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":4,"cyclesNotTaken":4,"CB":0,"opcode":"0xFB"},
    "CP d8":{"flagZ":"Z","flagN":"1","flagH":"H","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":0,"opcode":"0xFE"},
    "RST 38H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":1,"cyclesTaken":16,"cyclesNotTaken":16,"CB":0,"opcode":"0xFF"},
    /*begin CB*/
    "RLC B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x0"},
    "RLC C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x1"},
    "RLC D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x2"},
    "RLC E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x3"},
    "RLC H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x4"},
    "RLC L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x5"},
    "RLC (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x6"},
    "RLC A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x7"},
    "RRC B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x8"},
    "RRC C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x9"},
    "RRC D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA"},
    "RRC E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB"},
    "RRC H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC"},
    "RRC L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD"},
    "RRC (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xE"},
    "RRC A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF"},
    "RL B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x10"},
    "RL C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x11"},
    "RL D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x12"},
    "RL E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x13"},
    "RL H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x14"},
    "RL L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x15"},
    "RL (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x16"},
    "RL A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x17"},
    "RR B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x18"},
    "RR C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x19"},
    "RR D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x1A"},
    "RR E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x1B"},
    "RR H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x1C"},
    "RR L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x1D"},
    "RR (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x1E"},
    "RR A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x1F"},
    "SLA B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x20"},
    "SLA C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x21"},
    "SLA D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x22"},
    "SLA E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x23"},
    "SLA H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x24"},
    "SLA L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x25"},
    "SLA (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x26"},
    "SLA A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x27"},
    "SRA B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x28"},
    "SRA C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x29"},
    "SRA D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x2A"},
    "SRA E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x2B"},
    "SRA H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x2C"},
    "SRA L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x2D"},
    "SRA (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x2E"},
    "SRA A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x2F"},
    "SWAP B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x30"},
    "SWAP C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x31"},
    "SWAP D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x32"},
    "SWAP E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x33"},
    "SWAP H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x34"},
    "SWAP L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x35"},
    "SWAP (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x36"},
    "SWAP A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"0","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x37"},
    "SRL B":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x38"},
    "SRL C":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x39"},
    "SRL D":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x3A"},
    "SRL E":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x3B"},
    "SRL H":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x3C"},
    "SRL L":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x3D"},
    "SRL (HL)":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x3E"},
    "SRL A":{"flagZ":"Z","flagN":"0","flagH":"0","flagC":"C","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x3F"},
    "BIT 0,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x40"},
    "BIT 0,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x41"},
    "BIT 0,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x42"},
    "BIT 0,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x43"},
    "BIT 0,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x44"},
    "BIT 0,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x45"},
    "BIT 0,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x46"},
    "BIT 0,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x47"},
    "BIT 1,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x48"},
    "BIT 1,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x49"},
    "BIT 1,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x4A"},
    "BIT 1,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x4B"},
    "BIT 1,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x4C"},
    "BIT 1,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x4D"},
    "BIT 1,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x4E"},
    "BIT 1,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x4F"},
    "BIT 2,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x50"},
    "BIT 2,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x51"},
    "BIT 2,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x52"},
    "BIT 2,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x53"},
    "BIT 2,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x54"},
    "BIT 2,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x55"},
    "BIT 2,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x56"},
    "BIT 2,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x57"},
    "BIT 3,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x58"},
    "BIT 3,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x59"},
    "BIT 3,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x5A"},
    "BIT 3,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x5B"},
    "BIT 3,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x5C"},
    "BIT 3,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x5D"},
    "BIT 3,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x5E"},
    "BIT 3,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x5F"},
    "BIT 4,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x60"},
    "BIT 4,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x61"},
    "BIT 4,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x62"},
    "BIT 4,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x63"},
    "BIT 4,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x64"},
    "BIT 4,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x65"},
    "BIT 4,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x66"},
    "BIT 4,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x67"},
    "BIT 5,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x68"},
    "BIT 5,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x69"},
    "BIT 5,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x6A"},
    "BIT 5,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x6B"},
    "BIT 5,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x6C"},
    "BIT 5,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x6D"},
    "BIT 5,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x6E"},
    "BIT 5,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x6F"},
    "BIT 6,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x70"},
    "BIT 6,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x71"},
    "BIT 6,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x72"},
    "BIT 6,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x73"},
    "BIT 6,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x74"},
    "BIT 6,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x75"},
    "BIT 6,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x76"},
    "BIT 6,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x77"},
    "BIT 7,B":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x78"},
    "BIT 7,C":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x79"},
    "BIT 7,D":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x7A"},
    "BIT 7,E":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x7B"},
    "BIT 7,H":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x7C"},
    "BIT 7,L":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x7D"},
    "BIT 7,(HL)":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x7E"},
    "BIT 7,A":{"flagZ":"Z","flagN":"0","flagH":"1","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x7F"},
    "RES 0,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x80"},
    "RES 0,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x81"},
    "RES 0,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x82"},
    "RES 0,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x83"},
    "RES 0,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x84"},
    "RES 0,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x85"},
    "RES 0,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x86"},
    "RES 0,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x87"},
    "RES 1,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x88"},
    "RES 1,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x89"},
    "RES 1,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x8A"},
    "RES 1,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x8B"},
    "RES 1,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x8C"},
    "RES 1,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x8D"},
    "RES 1,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x8E"},
    "RES 1,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x8F"},
    "RES 2,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x90"},
    "RES 2,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x91"},
    "RES 2,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x92"},
    "RES 2,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x93"},
    "RES 2,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x94"},
    "RES 2,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x95"},
    "RES 2,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x96"},
    "RES 2,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x97"},
    "RES 3,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x98"},
    "RES 3,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x99"},
    "RES 3,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x9A"},
    "RES 3,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x9B"},
    "RES 3,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x9C"},
    "RES 3,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x9D"},
    "RES 3,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0x9E"},
    "RES 3,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0x9F"},
    "RES 4,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA0"},
    "RES 4,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA1"},
    "RES 4,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA2"},
    "RES 4,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA3"},
    "RES 4,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA4"},
    "RES 4,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA5"},
    "RES 4,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xA6"},
    "RES 4,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA7"},
    "RES 5,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA8"},
    "RES 5,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xA9"},
    "RES 5,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xAA"},
    "RES 5,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xAB"},
    "RES 5,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xAC"},
    "RES 5,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xAD"},
    "RES 5,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xAE"},
    "RES 5,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xAF"},
    "RES 6,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB0"},
    "RES 6,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB1"},
    "RES 6,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB2"},
    "RES 6,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB3"},
    "RES 6,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB4"},
    "RES 6,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB5"},
    "RES 6,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xB6"},
    "RES 6,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB7"},
    "RES 7,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB8"},
    "RES 7,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xB9"},
    "RES 7,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xBA"},
    "RES 7,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xBB"},
    "RES 7,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xBC"},
    "RES 7,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xBD"},
    "RES 7,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xBE"},
    "RES 7,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xBF"},
    "SET 0,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC0"},
    "SET 0,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC1"},
    "SET 0,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC2"},
    "SET 0,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC3"},
    "SET 0,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC4"},
    "SET 0,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC5"},
    "SET 0,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xC6"},
    "SET 0,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC7"},
    "SET 1,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC8"},
    "SET 1,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xC9"},
    "SET 1,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xCA"},
    "SET 1,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xCB"},
    "SET 1,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xCC"},
    "SET 1,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xCD"},
    "SET 1,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xCE"},
    "SET 1,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xCF"},
    "SET 2,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD0"},
    "SET 2,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD1"},
    "SET 2,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD2"},
    "SET 2,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD3"},
    "SET 2,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD4"},
    "SET 2,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD5"},
    "SET 2,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xD6"},
    "SET 2,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD7"},
    "SET 3,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD8"},
    "SET 3,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xD9"},
    "SET 3,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xDA"},
    "SET 3,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xDB"},
    "SET 3,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xDC"},
    "SET 3,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xDD"},
    "SET 3,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xDE"},
    "SET 3,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xDF"},
    "SET 4,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE0"},
    "SET 4,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE1"},
    "SET 4,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE2"},
    "SET 4,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE3"},
    "SET 4,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE4"},
    "SET 4,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE5"},
    "SET 4,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xE6"},
    "SET 4,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE7"},
    "SET 5,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE8"},
    "SET 5,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xE9"},
    "SET 5,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xEA"},
    "SET 5,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xEB"},
    "SET 5,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xEC"},
    "SET 5,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xED"},
    "SET 5,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xEE"},
    "SET 5,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xEF"},
    "SET 6,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF0"},
    "SET 6,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF1"},
    "SET 6,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF2"},
    "SET 6,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF3"},
    "SET 6,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF4"},
    "SET 6,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF5"},
    "SET 6,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xF6"},
    "SET 6,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF7"},
    "SET 7,B":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF8"},
    "SET 7,C":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xF9"},
    "SET 7,D":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xFA"},
    "SET 7,E":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xFB"},
    "SET 7,H":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xFC"},
    "SET 7,L":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xFD"},
    "SET 7,(HL)":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":16,"cyclesNotTaken":16,"CB":1,"opcode":"0xFE"},
    "SET 7,A":{"flagZ":"-","flagN":"-","flagH":"-","flagC":"-","len":2,"cyclesTaken":8,"cyclesNotTaken":8,"CB":1,"opcode":"0xFF"},
};
var regtbl = {
    a: {
        reg: 'a'
    },
    b: {
        reg: 'b'
    },
    c: {
        reg: 'c'
    },
    d: {
        reg: 'd'
    },
    e: {
        reg: 'e'
    },
    f: {
        reg: 'f'
    },
    h: {
        reg: 'h'
    },
    l: {
        reg: 'l'
    },
    bc: {
        reg: 'bc'
    },
    de: {
        reg: 'de'
    },
    hl: {
        reg: 'hl'
    }
};

function ast_node() {
    /*jshint validthis:true */
    this.cmd = 0;
    this.param = [];
    this.loc = 0;
    this.coc = 0;
    this.id = 0;
    this.children = [];
    this.hasChildren = function() {
        if (this.children.length > 0) {
            return 1;
        }
        return 0;
    };
    this.block = 0;
}

function ast_top() {
    /*jshint validthis:true */
    this.id = 0;
    this.children = [];
    this.hasChildren = function() {
        if (this.children.length > 0) {
            return 1;
        }
        return 0;
    };
    this.childIterator = 0;
    this.childNext = function() {
        if (this.childIterator < this.children.length) {
            return this.children[this.childIterator++];
        } else {
            return null;
        }
    };
    this.rewindIterator = function() {
        this.childIterator = 0;
    };
}

function get_argtype(argument) {
    if (regtbl[argument] !== undefined) {
        return 'register';
    }
    if (argument.substr(0, 2) === '0x') {
        /* could be a hex val */
        // allow up to 8 bytes or 64bits resolution
        // sign unknown. lowercase as always.
        var isHex = /^0x[0-9a-f]{1,8}$/i.test(argument);
        if (isHex) {
            return 'hex';
        } else {
            return 'malformed';
        }
    }
    var isDec = /^[0-9]{0,30}$/i.test(argument);
    if (isDec) {
        return 'dec';
    }
    var isLabel = /^[a-z]{0,30}$/i.test(argument);
    if (isLabel) {
        return 'label';
    }
    return 'unknown';
}

function read_opcode(line) {
        var op;
        var operation;
        if (line.split(' ').length > 0) {
            op = line.split(' ')[0];
        }
        var argv = null;
        var argc = 0;
        if (line.split(' ').length > 1) {
            argv = line.split(' ');
            argv = argv[1].split(',');
            argc = argv.length;
        }
        if (optbl[op] !== undefined) {
            operation = optbl[op];
            operation.av = [];
            // mul:  { id: 0x0A, ac: 2, at: {0: 'register', 1: 'hex|register'} }
            if (argc !== operation.ac) {
                operation.error = true;
                operation.reason = 'arg_count';
                return operation;
            }
            if (argc === 0) {
                if (operation.ac === 0) {
                    return operation;
                } else {
                    operation.error = true;
                    operation.reason = 'arg_count';
                    return operation;
                }
            }
            for (var j = 0; j < argc; j++) {
                /* grab each argument, check against expected type.  */
                var type = get_argtype(argv[j]);
                var template = operation.at[j].split('|');
                operation.adt = [];
                if (template.indexOf(type) === -1) {
                    /* script has an unknown argument type */
                    operation.av[j] = null;
                    operation.adt[j] = 'type_unknown';
                    operation.error = true;
                    operation.reason = 'arg_type';
                } else {
                    /* this one is valid argument type */
                    operation.av[j] = argv[j];
                    operation.adt[j] = type;
                }
            }
            return operation;
        } else {
            /* make an empy operation object and set undefined */
            operation = {
                error: true,
                reason: 'op_undefined'
            };
            return operation;
        }
    }
/* spit the dummy */
function spit(loc, coc, desc) {
    console.log('\n--- - ---- --------  -------- --- -  -');
    console.log('Great Scott! You\'ve torn a hole in the fabric of time!');
    console.log('-  -- ----------------------------------- --- -  -');
    if (loc !== -1) {
        console.log('[' + filename + '@' + loc + ':' + coc + ']');
        console.log(asc[loc]);
        var padding = '';
        for (var i = 0; i < coc; i++) {
            padding += ' ';
        }
        console.log(padding + '^');
    }
    console.log(' ' + desc);
    process.exit(1);
}



var ast = new ast_top();


/* process labels */
var current_code_block = null;
var index = 0;
for (index in asc) {
    var operation = read_opcode(asc[index]);
    if ((operation.error) && (operation.reason !== 'op_undefined')) {
        if (operation.reason === 'arg_type') {
            var node = new ast_node();
            node.cmd = 'error_oparg_type';
            node.loc = index;
            node.coc = 0;
            ast.children.push(node);
        }
        if (operation.reason === 'arg_count') {
            var node = new ast_node();
            node.cmd = 'error_oparg_count';
            node.loc = index;
            node.coc = 0;
            ast.children.push(node);
        }
        continue;
    }
    if (!operation.error) {
        /*
        if the opcode and argument are valid then we need
        to know the subsection we are in. :label block
        */
        if (current_code_block !== null) {
            var node = new ast_node();
            node.cmd = operation.id;
            node.loc = index;
            node.coc = 0;
            if (operation.ac > 0) {
                node.param = operation.av;
            }
            node.block = current_code_block;
            ast.children.push(node);
            continue;
        } else {
            var node = new ast_node();
            node.cmd = 'error_opfound_nomain';
            node.loc = index;
            node.coc = 0;
            ast.children.push(node);
            continue;
        }
        continue;
    }
    /* here we assume reply was op_undefined and proceed as normal*/
    /* fch: first character of line */
    var fch = asc[index][0];
    /* :label line */
    if (fch === ':') {
        var node = new ast_node();
        node.cmd = 'label';
        node.loc = index;
        node.coc = 0;
        node.param.push(asc[index].substr(1));
        ast.children.push(node);
        /* let ast generator know where to hang opcodes */
        current_code_block = asc[index].substr(1);
        continue;
    }
    /* ! comment line */
    if (fch === '!') {
        continue;
    }
    /* if we reach here we assume that the line
    makes no sense to us */
    var node = new ast_node();
    node.cmd = 'error_nonsense';
    node.loc = index;
    node.coc = 0;
    node.param.push(asc[index].substr(1));
    ast.children.push(node);
}


/* check syntax and build ast */
var labels = []; // list labels for dupe check - used later also
var child = [];

while (child = ast.childNext()) {
    var param = child.param;
    if (child.cmd === 'error_nonsense') {
        var desc = 'Parser expects valid OP code, label or something.';
        spit(child.loc, child.coc, desc);
    }
    if (child.cmd === 'error_opfound_nomain') {
        var desc = 'Parser discovered a valid opcode but expecting :main.';
        spit(child.loc, child.coc, desc);
    }
    if (child.cmd === 'error_oparg_count') {
        var desc = 'Parser found argument count mismatch.';
        spit(child.loc, child.coc, desc);
    }
    if (child.cmd === 'error_oparg_type') {
        var desc = 'Parser found argument type mismatch.';
        spit(child.loc, child.coc, desc);
    }
    if (child.cmd === 'label') {
        if (param[0] !== 'main') {
            if (labels[0] !== 'main') {
                var desc = 'Parser expects :main to be first label.';
                spit(child.loc, child.coc, desc);
            }
        }
        if (labels.indexOf(param[0]) !== -1) {
            /* we seem to have found a dupe label */
            var desc = 'Parser discovered duplicate :' + param[0] + ' label';
            spit(child.loc, child.coc, desc);
        } else {
            labels.push(param[0]);
        }
    }
}

/* without main we can't really do a lot */
if (labels.indexOf('main') === -1) {
    spit(-1, -1, ':main is missing!');
}

/* var labels = []; <-- specified earlier */

/* resolve jumps and calls to their destination */

ast.rewindIterator();
while (child = ast.childNext()) {
    /* jmp  */
    if (child.cmd === 0x04) {
        if (labels.indexOf(child.param[0]) === -1) {
            spit(child.loc, child.coc, 'Destination label :' + child.param + ' is missing.');
        }
    }
    /* call  */
    if (child.cmd === 0x05) {
        if (labels.indexOf(child.param[0]) === -1) {
            spit(child.loc, child.coc, 'Destination label :' + child.param + ' is missing.');
        }
    }
}

/* at this point the AST is built - now time to spit out code */


console.log(JSON.stringify(ast));