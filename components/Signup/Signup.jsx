import Link from "next/link";
import { useState } from "react";
import styles from "./Signup.module.css";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formInput, setFormInput] = useState({
        name: "",
        email: "",
        password: "",
        conPass: ""
    });


    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const formHandler = (e) => {
        e.preventDefault()
    }

    const formSubHandler = (e) => {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
        console.log(formInput)
    }


    return (
        <div className={styles.supMain}>
            <div className={styles.col1}>
                <h1 className={styles.cTitle}>Welcome</h1>
            </div>
            <div className={styles.col2}>
                <div className={styles.supForm}>
                    <h1 style={{ fontFamily: 'Josefin Sans', fontSize: 50 }}>Signup Now</h1>
                    <form onSubmit={formHandler}>
                        <div className={styles.supElements}>
                            <TextField
                                name="name"
                                value={formInput.name}
                                onChange={formSubHandler}
                                label="Name"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className={styles.supElements}>
                            <TextField
                                name="email"
                                value={formInput.email}
                                onChange={formSubHandler}
                                label="Email"
                                type="email"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className={styles.supElements}>
                            <TextField
                                name="password"
                                value={formInput.password}
                                onChange={formSubHandler}
                                label="Password"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? (
                                                    <BsEyeFill />
                                                ) : (
                                                        <BsEyeSlashFill />
                                                    )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                        </div>
                        <div className={styles.supElements}>
                            <TextField
                                name="confirm"
                                value={formInput.conPass}
                                onChange={formSubHandler}
                                label="Confirm password"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleShowPassword}
                                            >
                                                {showPassword ? (
                                                    <BsEyeFill />
                                                ) : (
                                                        <BsEyeSlashFill />
                                                    )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                fullWidth
                            />
                        </div>
                        <div>
                            <button className={styles.supBtn} type="submit">
                                Submit
                            </button>
                        </div>
                        <div className={styles.loginMessage}>
                            Already a User?{" "}
                            <Link href="/login">
                                <a>Login here</a>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
