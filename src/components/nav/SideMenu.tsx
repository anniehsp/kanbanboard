import React, { useEffect, useState } from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { Drawer, Grow, Theme } from '@mui/material';

import colors from '../../utils/color';
import getImages from '../../utils/ImageApi';

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
      width: '400px',
    },
    menu: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-around',
    },
    box: {
        width: '45%',
        height: '90px',
        backgroundColor: 'blue',
        borderRadius: '9px',
        marginBottom: theme.spacing(2),
    },
    optionContainer: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
}));

interface Props {
    open: boolean;
    onChangeSideMenu: (value: boolean) => void;
    onChangeBackgroundImage: (value: string) => void;
}

export default function SideMenu({ open, onChangeSideMenu, onChangeBackgroundImage }: Props) {
    const classes = useStyles();

    const [openColorOption, setOpenColorOption] = useState<boolean>(false);
    const [openImageOption, setOpenImageOption] = useState<boolean>(false);
    const [images, setImages] = useState<any[]>([]);

    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        const images = await getImages();
        setImages(images);
    };

    return (
      <div>
          <Drawer
              open={open}
              anchor="right"
              onClose={() => onChangeSideMenu(false)}
          >
              <div className={classes.drawer}>
                  <div className={classes.menu}>
                      <div
                          className={classes.box}
                          style={{
                              backgroundImage: 'url(https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/2560x1440/e93a3b56f1e677578e6059be2d9f8694/crmble_trello_order-mgmt.png)',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                          }}
                          onClick={() => {
                              setOpenImageOption(true);
                              setOpenColorOption(false);
                          }}
                      />
                      <div
                          className={classes.box}
                          style={{
                              backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEyPZUdrjIlthqtZ6RtH4sPY80wGoTMM9iw&usqp=CAU)',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover',
                          }}
                          onClick={() => {
                              setOpenColorOption(true);
                              setOpenImageOption(false);
                          }}
                      />
                  </div>

                  { openImageOption ? (
                      <Grow
                          in={openImageOption}
                      >
                          <div className={classes.optionContainer}>
                              {
                                  images.map((image: any, index: number) => (
                                      <div
                                          key={index}
                                          className={classes.box}
                                          style={{
                                              backgroundImage: `url(${image.thumb})`,
                                              backgroundRepeat: 'no-repeat',
                                              backgroundSize: 'cover',
                                          }}
                                          onClick={() => onChangeBackgroundImage(image.url)}
                                      />
                                  ))
                              }
                          </div>
                      </Grow>
                  ) : (
                      <Grow
                          in={openColorOption}
                      >
                          <div className={classes.optionContainer}>
                              {
                                  colors.map((color, index) => (
                                      <div
                                          key={index}
                                          className={classes.box}
                                          style={{
                                              backgroundColor: color,
                                          }}
                                          onClick={() => onChangeBackgroundImage(color)}
                                      />
                                  ))
                              }
                          </div>
                      </Grow>
                  )
                  }
              </div>
          </Drawer>
      </div>
    );
}