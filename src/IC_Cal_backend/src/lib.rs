use candid::{candid_method, Nat};
use ic_cdk_macros::{init, query, update, pre_upgrade, post_upgrade};
use num_traits::cast::ToPrimitive;

#[init]
fn init() {
    ic_cdk::println!("Calculator canister initialized.");
}

#[update]
#[candid_method(update)]
fn add(a: Nat, b: Nat) -> Nat {
    a + b
}

#[update]
#[candid_method(update)]
fn subtract(a: Nat, b: Nat) -> i128 {
    let a_i128: i128 = a.0.to_u128().unwrap_or_default() as i128;
    let b_i128: i128 = b.0.to_u128().unwrap_or_default() as i128;
    a_i128 - b_i128
}

#[update]
#[candid_method(update)]
fn multiply(a: Nat, b: Nat) -> Nat {
    a * b
}

#[update]
#[candid_method(update)]
fn divide(a: Nat, b: Nat) -> Option<Nat> {
    if b.0 == 0u128.into() {
        None
    } else {
        Some(a / b)
    }
}

#[query]
#[candid_method(query)]
fn greet(name: String) -> String {
    format!("Hello, {}! Welcome to the ICP Calculator.", name)
}

#[pre_upgrade]
fn pre_upgrade() {
    ic_cdk::println!("Preparing for upgrade.");
}

#[post_upgrade]
fn post_upgrade() {
    ic_cdk::println!("Upgrade completed successfully.");
}

candid::export_service!();

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_add() {
        let result = add(Nat::from(2), Nat::from(3));
        assert_eq!(result, Nat::from(5));
    }
}