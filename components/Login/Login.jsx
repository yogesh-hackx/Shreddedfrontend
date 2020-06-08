import Link from "next/link";
import { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { BsArrowRight, BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import styles from "./Login.module.css";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    }); console.log(formInput)
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const formSubHandler = (e) => {
        e.preventDefault()
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        })
        console.log(formInput)
    }


    const formHandler = (e) => {
        e.preventDefault();
    }


    return (
        <div className={styles.supMain}>
            <div className={styles.col1}>
                <h1 className={styles.cTitle}>Welcome</h1>
            </div>
            <div className={styles.col2}>
                <div className={styles.supForm}>
                    <div className={styles.title}>Login</div>
                    <form action="" onSubmit={formHandler}>
                        <div className={styles.supElements}>
                            <TextField
                                name="email"
                                value={formInput.email}
                                onChange={formSubHandler}
                                label="Email"
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
                        <div className={styles.buttonContainer}>
                            <button className={styles.supBtn} type="submit">
                                Login
                            </button>
                            <Link href="/signup">
                                <button
                                    className={styles.signUpButton}
                                    type="submit"
                                >
                                    Sign up
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LoginPage;
