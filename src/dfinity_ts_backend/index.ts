import { v4 as uuidv4 } from "uuid";
import { Server, StableBTreeMap, ic, Principal, serialize, Result } from "azle";
import express from "express";
import cors from "cors";
import { hexAddressFromPrincipal } from "azle/canisters/ledger";
