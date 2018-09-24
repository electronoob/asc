//gameboy opcode table 1
var pastraiser = 
{
   "0x": {
      "x0": "NOP\n1  4\n- - - -",
      "x1": "LD BC,d16\n3  12\n- - - -",
      "x2": "LD (BC),A\n1  8\n- - - -",
      "x3": "INC BC\n1  8\n- - - -",
      "x4": "INC B\n1  4\nZ 0 H -",
      "x5": "DEC B\n1  4\nZ 1 H -",
      "x6": "LD B,d8\n2  8\n- - - -",
      "x7": "RLCA\n1  4\n0 0 0 C",
      "x8": "LD (a16),SP\n3  20\n- - - -",
      "x9": "ADD HL,BC\n1  8\n- 0 H C",
      "xA": "LD A,(BC)\n1  8\n- - - -",
      "xB": "DEC BC\n1  8\n- - - -",
      "xC": "INC C\n1  4\nZ 0 H -",
      "xD": "DEC C\n1  4\nZ 1 H -",
      "xE": "LD C,d8\n2  8\n- - - -",
      "xF": "RRCA\n1  4\n0 0 0 C"
   },
   "1x": {
      "x0": "STOP 0\n2  4\n- - - -",
      "x1": "LD DE,d16\n3  12\n- - - -",
      "x2": "LD (DE),A\n1  8\n- - - -",
      "x3": "INC DE\n1  8\n- - - -",
      "x4": "INC D\n1  4\nZ 0 H -",
      "x5": "DEC D\n1  4\nZ 1 H -",
      "x6": "LD D,d8\n2  8\n- - - -",
      "x7": "RLA\n1  4\n0 0 0 C",
      "x8": "JR r8\n2  12\n- - - -",
      "x9": "ADD HL,DE\n1  8\n- 0 H C",
      "xA": "LD A,(DE)\n1  8\n- - - -",
      "xB": "DEC DE\n1  8\n- - - -",
      "xC": "INC E\n1  4\nZ 0 H -",
      "xD": "DEC E\n1  4\nZ 1 H -",
      "xE": "LD E,d8\n2  8\n- - - -",
      "xF": "RRA\n1  4\n0 0 0 C"
   },
   "2x": {
      "x0": "JR NZ,r8\n2  12/8\n- - - -",
      "x1": "LD HL,d16\n3  12\n- - - -",
      "x2": "LD (HL+),A\n1  8\n- - - -",
      "x3": "INC HL\n1  8\n- - - -",
      "x4": "INC H\n1  4\nZ 0 H -",
      "x5": "DEC H\n1  4\nZ 1 H -",
      "x6": "LD H,d8\n2  8\n- - - -",
      "x7": "DAA\n1  4\nZ - 0 C",
      "x8": "JR Z,r8\n2  12/8\n- - - -",
      "x9": "ADD HL,HL\n1  8\n- 0 H C",
      "xA": "LD A,(HL+)\n1  8\n- - - -",
      "xB": "DEC HL\n1  8\n- - - -",
      "xC": "INC L\n1  4\nZ 0 H -",
      "xD": "DEC L\n1  4\nZ 1 H -",
      "xE": "LD L,d8\n2  8\n- - - -",
      "xF": "CPL\n1  4\n- 1 1 -"
   },
   "3x": {
      "x0": "JR NC,r8\n2  12/8\n- - - -",
      "x1": "LD SP,d16\n3  12\n- - - -",
      "x2": "LD (HL-),A\n1  8\n- - - -",
      "x3": "INC SP\n1  8\n- - - -",
      "x4": "INC (HL)\n1  12\nZ 0 H -",
      "x5": "DEC (HL)\n1  12\nZ 1 H -",
      "x6": "LD (HL),d8\n2  12\n- - - -",
      "x7": "SCF\n1  4\n- 0 0 1",
      "x8": "JR C,r8\n2  12/8\n- - - -",
      "x9": "ADD HL,SP\n1  8\n- 0 H C",
      "xA": "LD A,(HL-)\n1  8\n- - - -",
      "xB": "DEC SP\n1  8\n- - - -",
      "xC": "INC A\n1  4\nZ 0 H -",
      "xD": "DEC A\n1  4\nZ 1 H -",
      "xE": "LD A,d8\n2  8\n- - - -",
      "xF": "CCF\n1  4\n- 0 0 C"
   },
   "4x": {
      "x0": "LD B,B\n1  4\n- - - -",
      "x1": "LD B,C\n1  4\n- - - -",
      "x2": "LD B,D\n1  4\n- - - -",
      "x3": "LD B,E\n1  4\n- - - -",
      "x4": "LD B,H\n1  4\n- - - -",
      "x5": "LD B,L\n1  4\n- - - -",
      "x6": "LD B,(HL)\n1  8\n- - - -",
      "x7": "LD B,A\n1  4\n- - - -",
      "x8": "LD C,B\n1  4\n- - - -",
      "x9": "LD C,C\n1  4\n- - - -",
      "xA": "LD C,D\n1  4\n- - - -",
      "xB": "LD C,E\n1  4\n- - - -",
      "xC": "LD C,H\n1  4\n- - - -",
      "xD": "LD C,L\n1  4\n- - - -",
      "xE": "LD C,(HL)\n1  8\n- - - -",
      "xF": "LD C,A\n1  4\n- - - -"
   },
   "5x": {
      "x0": "LD D,B\n1  4\n- - - -",
      "x1": "LD D,C\n1  4\n- - - -",
      "x2": "LD D,D\n1  4\n- - - -",
      "x3": "LD D,E\n1  4\n- - - -",
      "x4": "LD D,H\n1  4\n- - - -",
      "x5": "LD D,L\n1  4\n- - - -",
      "x6": "LD D,(HL)\n1  8\n- - - -",
      "x7": "LD D,A\n1  4\n- - - -",
      "x8": "LD E,B\n1  4\n- - - -",
      "x9": "LD E,C\n1  4\n- - - -",
      "xA": "LD E,D\n1  4\n- - - -",
      "xB": "LD E,E\n1  4\n- - - -",
      "xC": "LD E,H\n1  4\n- - - -",
      "xD": "LD E,L\n1  4\n- - - -",
      "xE": "LD E,(HL)\n1  8\n- - - -",
      "xF": "LD E,A\n1  4\n- - - -"
   },
   "6x": {
      "x0": "LD H,B\n1  4\n- - - -",
      "x1": "LD H,C\n1  4\n- - - -",
      "x2": "LD H,D\n1  4\n- - - -",
      "x3": "LD H,E\n1  4\n- - - -",
      "x4": "LD H,H\n1  4\n- - - -",
      "x5": "LD H,L\n1  4\n- - - -",
      "x6": "LD H,(HL)\n1  8\n- - - -",
      "x7": "LD H,A\n1  4\n- - - -",
      "x8": "LD L,B\n1  4\n- - - -",
      "x9": "LD L,C\n1  4\n- - - -",
      "xA": "LD L,D\n1  4\n- - - -",
      "xB": "LD L,E\n1  4\n- - - -",
      "xC": "LD L,H\n1  4\n- - - -",
      "xD": "LD L,L\n1  4\n- - - -",
      "xE": "LD L,(HL)\n1  8\n- - - -",
      "xF": "LD L,A\n1  4\n- - - -"
   },
   "7x": {
      "x0": "LD (HL),B\n1  8\n- - - -",
      "x1": "LD (HL),C\n1  8\n- - - -",
      "x2": "LD (HL),D\n1  8\n- - - -",
      "x3": "LD (HL),E\n1  8\n- - - -",
      "x4": "LD (HL),H\n1  8\n- - - -",
      "x5": "LD (HL),L\n1  8\n- - - -",
      "x6": "HALT\n1  4\n- - - -",
      "x7": "LD (HL),A\n1  8\n- - - -",
      "x8": "LD A,B\n1  4\n- - - -",
      "x9": "LD A,C\n1  4\n- - - -",
      "xA": "LD A,D\n1  4\n- - - -",
      "xB": "LD A,E\n1  4\n- - - -",
      "xC": "LD A,H\n1  4\n- - - -",
      "xD": "LD A,L\n1  4\n- - - -",
      "xE": "LD A,(HL)\n1  8\n- - - -",
      "xF": "LD A,A\n1  4\n- - - -"
   },
   "8x": {
      "x0": "ADD A,B\n1  4\nZ 0 H C",
      "x1": "ADD A,C\n1  4\nZ 0 H C",
      "x2": "ADD A,D\n1  4\nZ 0 H C",
      "x3": "ADD A,E\n1  4\nZ 0 H C",
      "x4": "ADD A,H\n1  4\nZ 0 H C",
      "x5": "ADD A,L\n1  4\nZ 0 H C",
      "x6": "ADD A,(HL)\n1  8\nZ 0 H C",
      "x7": "ADD A,A\n1  4\nZ 0 H C",
      "x8": "ADC A,B\n1  4\nZ 0 H C",
      "x9": "ADC A,C\n1  4\nZ 0 H C",
      "xA": "ADC A,D\n1  4\nZ 0 H C",
      "xB": "ADC A,E\n1  4\nZ 0 H C",
      "xC": "ADC A,H\n1  4\nZ 0 H C",
      "xD": "ADC A,L\n1  4\nZ 0 H C",
      "xE": "ADC A,(HL)\n1  8\nZ 0 H C",
      "xF": "ADC A,A\n1  4\nZ 0 H C"
   },
   "9x": {
      "x0": "SUB B\n1  4\nZ 1 H C",
      "x1": "SUB C\n1  4\nZ 1 H C",
      "x2": "SUB D\n1  4\nZ 1 H C",
      "x3": "SUB E\n1  4\nZ 1 H C",
      "x4": "SUB H\n1  4\nZ 1 H C",
      "x5": "SUB L\n1  4\nZ 1 H C",
      "x6": "SUB (HL)\n1  8\nZ 1 H C",
      "x7": "SUB A\n1  4\nZ 1 H C",
      "x8": "SBC A,B\n1  4\nZ 1 H C",
      "x9": "SBC A,C\n1  4\nZ 1 H C",
      "xA": "SBC A,D\n1  4\nZ 1 H C",
      "xB": "SBC A,E\n1  4\nZ 1 H C",
      "xC": "SBC A,H\n1  4\nZ 1 H C",
      "xD": "SBC A,L\n1  4\nZ 1 H C",
      "xE": "SBC A,(HL)\n1  8\nZ 1 H C",
      "xF": "SBC A,A\n1  4\nZ 1 H C"
   },
   "Ax": {
      "x0": "AND B\n1  4\nZ 0 1 0",
      "x1": "AND C\n1  4\nZ 0 1 0",
      "x2": "AND D\n1  4\nZ 0 1 0",
      "x3": "AND E\n1  4\nZ 0 1 0",
      "x4": "AND H\n1  4\nZ 0 1 0",
      "x5": "AND L\n1  4\nZ 0 1 0",
      "x6": "AND (HL)\n1  8\nZ 0 1 0",
      "x7": "AND A\n1  4\nZ 0 1 0",
      "x8": "XOR B\n1  4\nZ 0 0 0",
      "x9": "XOR C\n1  4\nZ 0 0 0",
      "xA": "XOR D\n1  4\nZ 0 0 0",
      "xB": "XOR E\n1  4\nZ 0 0 0",
      "xC": "XOR H\n1  4\nZ 0 0 0",
      "xD": "XOR L\n1  4\nZ 0 0 0",
      "xE": "XOR (HL)\n1  8\nZ 0 0 0",
      "xF": "XOR A\n1  4\nZ 0 0 0"
   },
   "Bx": {
      "x0": "OR B\n1  4\nZ 0 0 0",
      "x1": "OR C\n1  4\nZ 0 0 0",
      "x2": "OR D\n1  4\nZ 0 0 0",
      "x3": "OR E\n1  4\nZ 0 0 0",
      "x4": "OR H\n1  4\nZ 0 0 0",
      "x5": "OR L\n1  4\nZ 0 0 0",
      "x6": "OR (HL)\n1  8\nZ 0 0 0",
      "x7": "OR A\n1  4\nZ 0 0 0",
      "x8": "CP B\n1  4\nZ 1 H C",
      "x9": "CP C\n1  4\nZ 1 H C",
      "xA": "CP D\n1  4\nZ 1 H C",
      "xB": "CP E\n1  4\nZ 1 H C",
      "xC": "CP H\n1  4\nZ 1 H C",
      "xD": "CP L\n1  4\nZ 1 H C",
      "xE": "CP (HL)\n1  8\nZ 1 H C",
      "xF": "CP A\n1  4\nZ 1 H C"
   },
   "Cx": {
      "x0": "RET NZ\n1  20/8\n- - - -",
      "x1": "POP BC\n1  12\n- - - -",
      "x2": "JP NZ,a16\n3  16/12\n- - - -",
      "x3": "JP a16\n3  16\n- - - -",
      "x4": "CALL NZ,a16\n3  24/12\n- - - -",
      "x5": "PUSH BC\n1  16\n- - - -",
      "x6": "ADD A,d8\n2  8\nZ 0 H C",
      "x7": "RST 00H\n1  16\n- - - -",
      "x8": "RET Z\n1  20/8\n- - - -",
      "x9": "RET\n1  16\n- - - -",
      "xA": "JP Z,a16\n3  16/12\n- - - -",
      "xB": "PREFIX CB\n1  4\n- - - -",
      "xC": "CALL Z,a16\n3  24/12\n- - - -",
      "xD": "CALL a16\n3  24\n- - - -",
      "xE": "ADC A,d8\n2  8\nZ 0 H C",
      "xF": "RST 08H\n1  16\n- - - -"
   },
   "Dx": {
      "x0": "RET NC\n1  20/8\n- - - -",
      "x1": "POP DE\n1  12\n- - - -",
      "x2": "JP NC,a16\n3  16/12\n- - - -",
      "x3": "",
      "x4": "CALL NC,a16\n3  24/12\n- - - -",
      "x5": "PUSH DE\n1  16\n- - - -",
      "x6": "SUB d8\n2  8\nZ 1 H C",
      "x7": "RST 10H\n1  16\n- - - -",
      "x8": "RET C\n1  20/8\n- - - -",
      "x9": "RETI\n1  16\n- - - -",
      "xA": "JP C,a16\n3  16/12\n- - - -",
      "xB": "",
      "xC": "CALL C,a16\n3  24/12\n- - - -",
      "xD": "",
      "xE": "SBC A,d8\n2  8\nZ 1 H C",
      "xF": "RST 18H\n1  16\n- - - -"
   },
   "Ex": {
      "x0": "LDH (a8),A\n2  12\n- - - -",
      "x1": "POP HL\n1  12\n- - - -",
      "x2": "LD (C),A\n2  8\n- - - -",
      "x3": "",
      "x4": "",
      "x5": "PUSH HL\n1  16\n- - - -",
      "x6": "AND d8\n2  8\nZ 0 1 0",
      "x7": "RST 20H\n1  16\n- - - -",
      "x8": "ADD SP,r8\n2  16\n0 0 H C",
      "x9": "JP (HL)\n1  4\n- - - -",
      "xA": "LD (a16),A\n3  16\n- - - -",
      "xB": "",
      "xC": "",
      "xD": "",
      "xE": "XOR d8\n2  8\nZ 0 0 0",
      "xF": "RST 28H\n1  16\n- - - -"
   },
   "Fx": {
      "x0": "LDH A,(a8)\n2  12\n- - - -",
      "x1": "POP AF\n1  12\nZ N H C",
      "x2": "LD A,(C)\n2  8\n- - - -",
      "x3": "DI\n1  4\n- - - -",
      "x4": "",
      "x5": "PUSH AF\n1  16\n- - - -",
      "x6": "OR d8\n2  8\nZ 0 0 0",
      "x7": "RST 30H\n1  16\n- - - -",
      "x8": "LD HL,SP+r8\n2  12\n0 0 H C",
      "x9": "LD SP,HL\n1  8\n- - - -",
      "xA": "LD A,(a16)\n3  16\n- - - -",
      "xB": "EI\n1  4\n- - - -",
      "xC": "",
      "xD": "",
      "xE": "CP d8\n2  8\nZ 1 H C",
      "xF": "RST 38H\n1  16\n- - - -"
   }
};

var cb = {
   "0x": {
      "x0": "RLC B\n2  8\nZ 0 0 C",
      "x1": "RLC C\n2  8\nZ 0 0 C",
      "x2": "RLC D\n2  8\nZ 0 0 C",
      "x3": "RLC E\n2  8\nZ 0 0 C",
      "x4": "RLC H\n2  8\nZ 0 0 C",
      "x5": "RLC L\n2  8\nZ 0 0 C",
      "x6": "RLC (HL)\n2  16\nZ 0 0 C",
      "x7": "RLC A\n2  8\nZ 0 0 C",
      "x8": "RRC B\n2  8\nZ 0 0 C",
      "x9": "RRC C\n2  8\nZ 0 0 C",
      "xA": "RRC D\n2  8\nZ 0 0 C",
      "xB": "RRC E\n2  8\nZ 0 0 C",
      "xC": "RRC H\n2  8\nZ 0 0 C",
      "xD": "RRC L\n2  8\nZ 0 0 C",
      "xE": "RRC (HL)\n2  16\nZ 0 0 C",
      "xF": "RRC A\n2  8\nZ 0 0 C"
   },
   "1x": {
      "x0": "RL B\n2  8\nZ 0 0 C",
      "x1": "RL C\n2  8\nZ 0 0 C",
      "x2": "RL D\n2  8\nZ 0 0 C",
      "x3": "RL E\n2  8\nZ 0 0 C",
      "x4": "RL H\n2  8\nZ 0 0 C",
      "x5": "RL L\n2  8\nZ 0 0 C",
      "x6": "RL (HL)\n2  16\nZ 0 0 C",
      "x7": "RL A\n2  8\nZ 0 0 C",
      "x8": "RR B\n2  8\nZ 0 0 C",
      "x9": "RR C\n2  8\nZ 0 0 C",
      "xA": "RR D\n2  8\nZ 0 0 C",
      "xB": "RR E\n2  8\nZ 0 0 C",
      "xC": "RR H\n2  8\nZ 0 0 C",
      "xD": "RR L\n2  8\nZ 0 0 C",
      "xE": "RR (HL)\n2  16\nZ 0 0 C",
      "xF": "RR A\n2  8\nZ 0 0 C"
   },
   "2x": {
      "x0": "SLA B\n2  8\nZ 0 0 C",
      "x1": "SLA C\n2  8\nZ 0 0 C",
      "x2": "SLA D\n2  8\nZ 0 0 C",
      "x3": "SLA E\n2  8\nZ 0 0 C",
      "x4": "SLA H\n2  8\nZ 0 0 C",
      "x5": "SLA L\n2  8\nZ 0 0 C",
      "x6": "SLA (HL)\n2  16\nZ 0 0 C",
      "x7": "SLA A\n2  8\nZ 0 0 C",
      "x8": "SRA B\n2  8\nZ 0 0 0",
      "x9": "SRA C\n2  8\nZ 0 0 0",
      "xA": "SRA D\n2  8\nZ 0 0 0",
      "xB": "SRA E\n2  8\nZ 0 0 0",
      "xC": "SRA H\n2  8\nZ 0 0 0",
      "xD": "SRA L\n2  8\nZ 0 0 0",
      "xE": "SRA (HL)\n2  16\nZ 0 0 0",
      "xF": "SRA A\n2  8\nZ 0 0 0"
   },
   "3x": {
      "x0": "SWAP B\n2  8\nZ 0 0 0",
      "x1": "SWAP C\n2  8\nZ 0 0 0",
      "x2": "SWAP D\n2  8\nZ 0 0 0",
      "x3": "SWAP E\n2  8\nZ 0 0 0",
      "x4": "SWAP H\n2  8\nZ 0 0 0",
      "x5": "SWAP L\n2  8\nZ 0 0 0",
      "x6": "SWAP (HL)\n2  16\nZ 0 0 0",
      "x7": "SWAP A\n2  8\nZ 0 0 0",
      "x8": "SRL B\n2  8\nZ 0 0 C",
      "x9": "SRL C\n2  8\nZ 0 0 C",
      "xA": "SRL D\n2  8\nZ 0 0 C",
      "xB": "SRL E\n2  8\nZ 0 0 C",
      "xC": "SRL H\n2  8\nZ 0 0 C",
      "xD": "SRL L\n2  8\nZ 0 0 C",
      "xE": "SRL (HL)\n2  16\nZ 0 0 C",
      "xF": "SRL A\n2  8\nZ 0 0 C"
   },
   "4x": {
      "x0": "BIT 0,B\n2  8\nZ 0 1 -",
      "x1": "BIT 0,C\n2  8\nZ 0 1 -",
      "x2": "BIT 0,D\n2  8\nZ 0 1 -",
      "x3": "BIT 0,E\n2  8\nZ 0 1 -",
      "x4": "BIT 0,H\n2  8\nZ 0 1 -",
      "x5": "BIT 0,L\n2  8\nZ 0 1 -",
      "x6": "BIT 0,(HL)\n2  16\nZ 0 1 -",
      "x7": "BIT 0,A\n2  8\nZ 0 1 -",
      "x8": "BIT 1,B\n2  8\nZ 0 1 -",
      "x9": "BIT 1,C\n2  8\nZ 0 1 -",
      "xA": "BIT 1,D\n2  8\nZ 0 1 -",
      "xB": "BIT 1,E\n2  8\nZ 0 1 -",
      "xC": "BIT 1,H\n2  8\nZ 0 1 -",
      "xD": "BIT 1,L\n2  8\nZ 0 1 -",
      "xE": "BIT 1,(HL)\n2  16\nZ 0 1 -",
      "xF": "BIT 1,A\n2  8\nZ 0 1 -"
   },
   "5x": {
      "x0": "BIT 2,B\n2  8\nZ 0 1 -",
      "x1": "BIT 2,C\n2  8\nZ 0 1 -",
      "x2": "BIT 2,D\n2  8\nZ 0 1 -",
      "x3": "BIT 2,E\n2  8\nZ 0 1 -",
      "x4": "BIT 2,H\n2  8\nZ 0 1 -",
      "x5": "BIT 2,L\n2  8\nZ 0 1 -",
      "x6": "BIT 2,(HL)\n2  16\nZ 0 1 -",
      "x7": "BIT 2,A\n2  8\nZ 0 1 -",
      "x8": "BIT 3,B\n2  8\nZ 0 1 -",
      "x9": "BIT 3,C\n2  8\nZ 0 1 -",
      "xA": "BIT 3,D\n2  8\nZ 0 1 -",
      "xB": "BIT 3,E\n2  8\nZ 0 1 -",
      "xC": "BIT 3,H\n2  8\nZ 0 1 -",
      "xD": "BIT 3,L\n2  8\nZ 0 1 -",
      "xE": "BIT 3,(HL)\n2  16\nZ 0 1 -",
      "xF": "BIT 3,A\n2  8\nZ 0 1 -"
   },
   "6x": {
      "x0": "BIT 4,B\n2  8\nZ 0 1 -",
      "x1": "BIT 4,C\n2  8\nZ 0 1 -",
      "x2": "BIT 4,D\n2  8\nZ 0 1 -",
      "x3": "BIT 4,E\n2  8\nZ 0 1 -",
      "x4": "BIT 4,H\n2  8\nZ 0 1 -",
      "x5": "BIT 4,L\n2  8\nZ 0 1 -",
      "x6": "BIT 4,(HL)\n2  16\nZ 0 1 -",
      "x7": "BIT 4,A\n2  8\nZ 0 1 -",
      "x8": "BIT 5,B\n2  8\nZ 0 1 -",
      "x9": "BIT 5,C\n2  8\nZ 0 1 -",
      "xA": "BIT 5,D\n2  8\nZ 0 1 -",
      "xB": "BIT 5,E\n2  8\nZ 0 1 -",
      "xC": "BIT 5,H\n2  8\nZ 0 1 -",
      "xD": "BIT 5,L\n2  8\nZ 0 1 -",
      "xE": "BIT 5,(HL)\n2  16\nZ 0 1 -",
      "xF": "BIT 5,A\n2  8\nZ 0 1 -"
   },
   "7x": {
      "x0": "BIT 6,B\n2  8\nZ 0 1 -",
      "x1": "BIT 6,C\n2  8\nZ 0 1 -",
      "x2": "BIT 6,D\n2  8\nZ 0 1 -",
      "x3": "BIT 6,E\n2  8\nZ 0 1 -",
      "x4": "BIT 6,H\n2  8\nZ 0 1 -",
      "x5": "BIT 6,L\n2  8\nZ 0 1 -",
      "x6": "BIT 6,(HL)\n2  16\nZ 0 1 -",
      "x7": "BIT 6,A\n2  8\nZ 0 1 -",
      "x8": "BIT 7,B\n2  8\nZ 0 1 -",
      "x9": "BIT 7,C\n2  8\nZ 0 1 -",
      "xA": "BIT 7,D\n2  8\nZ 0 1 -",
      "xB": "BIT 7,E\n2  8\nZ 0 1 -",
      "xC": "BIT 7,H\n2  8\nZ 0 1 -",
      "xD": "BIT 7,L\n2  8\nZ 0 1 -",
      "xE": "BIT 7,(HL)\n2  16\nZ 0 1 -",
      "xF": "BIT 7,A\n2  8\nZ 0 1 -"
   },
   "8x": {
      "x0": "RES 0,B\n2  8\n- - - -",
      "x1": "RES 0,C\n2  8\n- - - -",
      "x2": "RES 0,D\n2  8\n- - - -",
      "x3": "RES 0,E\n2  8\n- - - -",
      "x4": "RES 0,H\n2  8\n- - - -",
      "x5": "RES 0,L\n2  8\n- - - -",
      "x6": "RES 0,(HL)\n2  16\n- - - -",
      "x7": "RES 0,A\n2  8\n- - - -",
      "x8": "RES 1,B\n2  8\n- - - -",
      "x9": "RES 1,C\n2  8\n- - - -",
      "xA": "RES 1,D\n2  8\n- - - -",
      "xB": "RES 1,E\n2  8\n- - - -",
      "xC": "RES 1,H\n2  8\n- - - -",
      "xD": "RES 1,L\n2  8\n- - - -",
      "xE": "RES 1,(HL)\n2  16\n- - - -",
      "xF": "RES 1,A\n2  8\n- - - -"
   },
   "9x": {
      "x0": "RES 2,B\n2  8\n- - - -",
      "x1": "RES 2,C\n2  8\n- - - -",
      "x2": "RES 2,D\n2  8\n- - - -",
      "x3": "RES 2,E\n2  8\n- - - -",
      "x4": "RES 2,H\n2  8\n- - - -",
      "x5": "RES 2,L\n2  8\n- - - -",
      "x6": "RES 2,(HL)\n2  16\n- - - -",
      "x7": "RES 2,A\n2  8\n- - - -",
      "x8": "RES 3,B\n2  8\n- - - -",
      "x9": "RES 3,C\n2  8\n- - - -",
      "xA": "RES 3,D\n2  8\n- - - -",
      "xB": "RES 3,E\n2  8\n- - - -",
      "xC": "RES 3,H\n2  8\n- - - -",
      "xD": "RES 3,L\n2  8\n- - - -",
      "xE": "RES 3,(HL)\n2  16\n- - - -",
      "xF": "RES 3,A\n2  8\n- - - -"
   },
   "Ax": {
      "x0": "RES 4,B\n2  8\n- - - -",
      "x1": "RES 4,C\n2  8\n- - - -",
      "x2": "RES 4,D\n2  8\n- - - -",
      "x3": "RES 4,E\n2  8\n- - - -",
      "x4": "RES 4,H\n2  8\n- - - -",
      "x5": "RES 4,L\n2  8\n- - - -",
      "x6": "RES 4,(HL)\n2  16\n- - - -",
      "x7": "RES 4,A\n2  8\n- - - -",
      "x8": "RES 5,B\n2  8\n- - - -",
      "x9": "RES 5,C\n2  8\n- - - -",
      "xA": "RES 5,D\n2  8\n- - - -",
      "xB": "RES 5,E\n2  8\n- - - -",
      "xC": "RES 5,H\n2  8\n- - - -",
      "xD": "RES 5,L\n2  8\n- - - -",
      "xE": "RES 5,(HL)\n2  16\n- - - -",
      "xF": "RES 5,A\n2  8\n- - - -"
   },
   "Bx": {
      "x0": "RES 6,B\n2  8\n- - - -",
      "x1": "RES 6,C\n2  8\n- - - -",
      "x2": "RES 6,D\n2  8\n- - - -",
      "x3": "RES 6,E\n2  8\n- - - -",
      "x4": "RES 6,H\n2  8\n- - - -",
      "x5": "RES 6,L\n2  8\n- - - -",
      "x6": "RES 6,(HL)\n2  16\n- - - -",
      "x7": "RES 6,A\n2  8\n- - - -",
      "x8": "RES 7,B\n2  8\n- - - -",
      "x9": "RES 7,C\n2  8\n- - - -",
      "xA": "RES 7,D\n2  8\n- - - -",
      "xB": "RES 7,E\n2  8\n- - - -",
      "xC": "RES 7,H\n2  8\n- - - -",
      "xD": "RES 7,L\n2  8\n- - - -",
      "xE": "RES 7,(HL)\n2  16\n- - - -",
      "xF": "RES 7,A\n2  8\n- - - -"
   },
   "Cx": {
      "x0": "SET 0,B\n2  8\n- - - -",
      "x1": "SET 0,C\n2  8\n- - - -",
      "x2": "SET 0,D\n2  8\n- - - -",
      "x3": "SET 0,E\n2  8\n- - - -",
      "x4": "SET 0,H\n2  8\n- - - -",
      "x5": "SET 0,L\n2  8\n- - - -",
      "x6": "SET 0,(HL)\n2  16\n- - - -",
      "x7": "SET 0,A\n2  8\n- - - -",
      "x8": "SET 1,B\n2  8\n- - - -",
      "x9": "SET 1,C\n2  8\n- - - -",
      "xA": "SET 1,D\n2  8\n- - - -",
      "xB": "SET 1,E\n2  8\n- - - -",
      "xC": "SET 1,H\n2  8\n- - - -",
      "xD": "SET 1,L\n2  8\n- - - -",
      "xE": "SET 1,(HL)\n2  16\n- - - -",
      "xF": "SET 1,A\n2  8\n- - - -"
   },
   "Dx": {
      "x0": "SET 2,B\n2  8\n- - - -",
      "x1": "SET 2,C\n2  8\n- - - -",
      "x2": "SET 2,D\n2  8\n- - - -",
      "x3": "SET 2,E\n2  8\n- - - -",
      "x4": "SET 2,H\n2  8\n- - - -",
      "x5": "SET 2,L\n2  8\n- - - -",
      "x6": "SET 2,(HL)\n2  16\n- - - -",
      "x7": "SET 2,A\n2  8\n- - - -",
      "x8": "SET 3,B\n2  8\n- - - -",
      "x9": "SET 3,C\n2  8\n- - - -",
      "xA": "SET 3,D\n2  8\n- - - -",
      "xB": "SET 3,E\n2  8\n- - - -",
      "xC": "SET 3,H\n2  8\n- - - -",
      "xD": "SET 3,L\n2  8\n- - - -",
      "xE": "SET 3,(HL)\n2  16\n- - - -",
      "xF": "SET 3,A\n2  8\n- - - -"
   },
   "Ex": {
      "x0": "SET 4,B\n2  8\n- - - -",
      "x1": "SET 4,C\n2  8\n- - - -",
      "x2": "SET 4,D\n2  8\n- - - -",
      "x3": "SET 4,E\n2  8\n- - - -",
      "x4": "SET 4,H\n2  8\n- - - -",
      "x5": "SET 4,L\n2  8\n- - - -",
      "x6": "SET 4,(HL)\n2  16\n- - - -",
      "x7": "SET 4,A\n2  8\n- - - -",
      "x8": "SET 5,B\n2  8\n- - - -",
      "x9": "SET 5,C\n2  8\n- - - -",
      "xA": "SET 5,D\n2  8\n- - - -",
      "xB": "SET 5,E\n2  8\n- - - -",
      "xC": "SET 5,H\n2  8\n- - - -",
      "xD": "SET 5,L\n2  8\n- - - -",
      "xE": "SET 5,(HL)\n2  16\n- - - -",
      "xF": "SET 5,A\n2  8\n- - - -"
   },
   "Fx": {
      "x0": "SET 6,B\n2  8\n- - - -",
      "x1": "SET 6,C\n2  8\n- - - -",
      "x2": "SET 6,D\n2  8\n- - - -",
      "x3": "SET 6,E\n2  8\n- - - -",
      "x4": "SET 6,H\n2  8\n- - - -",
      "x5": "SET 6,L\n2  8\n- - - -",
      "x6": "SET 6,(HL)\n2  16\n- - - -",
      "x7": "SET 6,A\n2  8\n- - - -",
      "x8": "SET 7,B\n2  8\n- - - -",
      "x9": "SET 7,C\n2  8\n- - - -",
      "xA": "SET 7,D\n2  8\n- - - -",
      "xB": "SET 7,E\n2  8\n- - - -",
      "xC": "SET 7,H\n2  8\n- - - -",
      "xD": "SET 7,L\n2  8\n- - - -",
      "xE": "SET 7,(HL)\n2  16\n- - - -",
      "xF": "SET 7,A\n2  8\n- - - -"
   }
};

var j,k,storage={};
var x = pastraiser;
for(k=0;k<16;k++)
for(j=0;j<16;j++) {
  var cell  = x[k.toString(16).toUpperCase()+'x']['x'+ j.toString(16).toUpperCase()];
  if(cell.length === 0) continue; 
  var cellparts = {};
  cellparts['mnemonic'] = cell.split('\n')[0];
  cellparts['flags'] = cell.split('\n')[2];
  cellparts['len'] = cell.split('\n')[1].split(' ')[0];
  cellparts['cycles'] = cell.split('\n')[1].split(' ')[2];
  storage[parseInt(k.toString(16).toUpperCase()+''+j.toString(16).toUpperCase(),16)] = cellparts;
}

var struct = `
struct nodeStruct
{
  char mnemonic[32];
  char flagZ;
  char flagN;
  char flagH;
  char flagC;
  uint8_t len;
  uint8_t cyclesTaken;
  uint8_t cyclesNotTaken;
  uint8_t hex;
};
typedef struct nodeStruct node;

/* next goes into runtime (main()) */
node opcode[] = {
*replaceme*
};
`;

var i = 0;
var o;
var z = "";
for (i=0;i<256;i++)
{
  o = storage[i];
  if(o == undefined)
  {
  	o = {};
    o.mnemonic = "undefined";
    o.flags = "";
    o.len = 0;
    o.cycles = "0";
    o.hex = undefined;
  }
  o.hex = "0x" + i.toString(16).toUpperCase();
 
  if(o.cycles.split("/").length == 1)
  {
    o.cyclesTaken = o.cycles;
    o.cyclesNotTaken = o.cycles;
  } else {
    o.cyclesTaken = o.cycles.split("/")[0];
    o.cyclesNotTaken = o.cycles.split("/")[1];
  }
  //console.log(o.flags);
 //  result = a > b ? x : y;
  var flag = o.flags.split(" ");
 // 
  o.flagZ = flag[0];
  o.flagN = flag[1];
  o.flagH = flag[2];
  o.flagC = flag[3];
  if (o.mnemonic !== "undefined")
  z += "  \"" + o.mnemonic + "\":{"+
    "\"flagZ\":\"" + o.flagZ + "\","+
    "\"flagN\":\"" + o.flagN + "\","+
    "\"flagH\":\"" + o.flagH + "\","+
    "\"flagC\":\"" + o.flagC + "\","+
    "\"len\":" + o.len + ","+
    "\"cyclesTaken\":" + o.cyclesTaken + ","+
    "\"cyclesNotTaken\":" + o.cyclesNotTaken + ","+
    "\"opcode\":\"" + o.hex + "\"},\n";
}
//instruction when action is not taken
console.log ("{\n" + z + "\n}");//struct.replace("*replaceme*", z);

//(JSON.stringify(storage));




//http://convertjson.com/html-table-to-json.htm
//http://pastraiser.com/cpu/gameboy/gameboy_opcodes.html
//https://jsonformatter.curiousconcept.com/




